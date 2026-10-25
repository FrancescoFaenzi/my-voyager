import { describe, expect, it, vi } from 'vitest';

import {
  CATALOG_TIMELINE_PULL_MESSAGE,
  CATALOG_TIMELINE_PUSH_MESSAGE,
} from '@/features/timeline/catalogHierarchySync';

import { GOOGLE_DRIVE_UNAVAILABLE_ON_DEVICE, guardDriveWithoutSignIn } from '../driveDeviceGuard';

vi.mock('@/core/services/GoogleDriveSyncService', () => ({
  googleDriveSyncService: { getState: async () => ({ mode: 'manual' }) },
}));

const sender = {} as chrome.runtime.MessageSender;

const DRIVE_MESSAGES = [
  'gv.sync.authenticate',
  'gv.sync.upload',
  'gv.sync.download',
  'gv.sync.pullPromptsMerge',
  'gv.sync.pushPromptsMerge',
  CATALOG_TIMELINE_PUSH_MESSAGE,
  CATALOG_TIMELINE_PULL_MESSAGE,
];

function guarded(canSignIn: boolean) {
  const inner = vi.fn((message: { type: string }) =>
    message.type.startsWith('gv.sync.') ? Promise.resolve({ ok: true, handled: true }) : null,
  );
  const handle = guardDriveWithoutSignIn(inner, { canSignIn: async () => canSignIn });
  return { inner, handle };
}

describe('Google Drive messages where the browser cannot sign in', () => {
  it.each(DRIVE_MESSAGES)('answers %s with a clear error and never reaches Drive', async (type) => {
    const { inner, handle } = guarded(false);
    await expect(handle({ type, payload: { interactive: true } }, sender)).resolves.toEqual({
      ok: false,
      error: GOOGLE_DRIVE_UNAVAILABLE_ON_DEVICE,
      state: { mode: 'manual' },
    });
    expect(inner).not.toHaveBeenCalled();
  });

  it('still reads the state, sets the mode and signs out', async () => {
    const { inner, handle } = guarded(false);
    for (const type of ['gv.sync.getState', 'gv.sync.setMode', 'gv.sync.signOut']) {
      await expect(handle({ type }, sender)).resolves.toEqual({ ok: true, handled: true });
    }
    expect(inner).toHaveBeenCalledTimes(3);
  });

  it('leaves messages that are not cloud sync to the other handlers', () => {
    const { handle } = guarded(false);
    expect(handle({ type: 'gv.plugins.list' }, sender)).toBeNull();
  });
});

describe('Google Drive messages where the browser can sign in', () => {
  it.each(DRIVE_MESSAGES)('hands %s to the sync handler as before', async (type) => {
    const { inner, handle } = guarded(true);
    await expect(handle({ type }, sender)).resolves.toEqual({ ok: true, handled: true });
    expect(inner).toHaveBeenCalledTimes(1);
  });
});
