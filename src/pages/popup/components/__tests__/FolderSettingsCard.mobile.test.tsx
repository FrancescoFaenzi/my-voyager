import React, { act } from 'react';
import { type Root, createRoot } from 'react-dom/client';

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import type { TranslationKey } from '@/utils/translations';

import { FolderSettingsCard, type FolderSettingsValues } from '../FolderSettingsCard';

// The popup reads the device once per page, so each test sets it through the reader.
const device = vi.hoisted(() => ({ os: 'mac' }));
vi.mock('@/core/utils/formFactor', async (importOriginal) => {
  const actual = await importOriginal<typeof import('@/core/utils/formFactor')>();
  return {
    ...actual,
    readPlatformFormFactor: async () => actual.formFactorFromOs(device.os),
  };
});

const translate = (key: TranslationKey): string => key;

const values: FolderSettingsValues = {
  folderEnabled: true,
  floatingModeEnabled: true,
  floatingOpenOnStart: true,
  hideArchivedConversations: false,
  folderSearchEnabled: true,
  folderProjectEnabled: false,
};

const FOLDER_SWITCHES = [
  'folder-enabled',
  'floating-mode',
  'floating-open-on-start',
  'hide-archived',
  'folder-search-enabled',
  'folder-project-enabled',
];

describe('FolderSettingsCard on a phone', () => {
  let container: HTMLDivElement;
  let root: Root;

  const renderOn = async (os: string) => {
    device.os = os;
    const onChange = vi.fn();
    const onAccountIsolationChange = vi.fn();
    await act(async () => {
      root.render(
        <FolderSettingsCard
          values={values}
          onChange={onChange}
          accountIsolation={{
            enabled: false,
            platformLabel: 'Gemini',
            onChange: onAccountIsolationChange,
          }}
          aiStructureCopy={{ status: 'idle', onCopy: vi.fn() }}
          isVisible={() => true}
          t={translate}
        />,
      );
    });
    // The folder plugins' manifests resolve after the device is read.
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });
    const input = (id: string) => container.querySelector<HTMLInputElement>(`#${id}`)!;
    return { onChange, onAccountIsolationChange, input };
  };

  beforeEach(() => {
    (globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
    container = document.createElement('div');
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
  });

  // #1072: 2.2.1 greyed the folder switches on every Android browser.
  it.each(['mac', 'android'])('leaves every switch usable on %s', async (os) => {
    const { input } = await renderOn(os);

    expect(container.textContent).not.toContain('folderUnavailableOnMobile');
    for (const id of FOLDER_SWITCHES) {
      expect(input(id).disabled, id).toBe(false);
    }
  });
});
