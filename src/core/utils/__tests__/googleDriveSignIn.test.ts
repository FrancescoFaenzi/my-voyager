import { afterEach, describe, expect, it } from 'vitest';

import { googleDriveUnavailableOn } from '../googleDriveSignIn';

const original = chrome.identity;

afterEach(() => {
  (chrome as { identity?: unknown }).identity = original;
});

describe('googleDriveUnavailableOn', () => {
  // #1072: Drive was refused on every Android browser, Edge for Android included.
  it('keeps Drive on an Android browser that has the identity API', () => {
    (chrome as { identity?: unknown }).identity = { getAuthToken: () => undefined };
    expect(googleDriveUnavailableOn('mobile')).toBe(false);
    (chrome as { identity?: unknown }).identity = { launchWebAuthFlow: () => undefined };
    expect(googleDriveUnavailableOn('mobile')).toBe(false);
  });

  it('refuses Drive on a phone browser with no way to sign in, as Firefox for Android', () => {
    (chrome as { identity?: unknown }).identity = undefined;
    expect(googleDriveUnavailableOn('mobile')).toBe(true);
  });

  it('never refuses Drive on a desktop', () => {
    (chrome as { identity?: unknown }).identity = undefined;
    expect(googleDriveUnavailableOn('desktop')).toBe(false);
  });
});
