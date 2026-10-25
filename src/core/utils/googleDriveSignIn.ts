/**
 * Whether Google Drive can sign in here. Every desktop can. On a phone it depends on
 * the browser: Firefox for Android has neither `identity.getAuthToken` nor
 * `identity.launchWebAuthFlow`, so a sign-in there can only fail, while an Android
 * browser that has the identity API (as Chromium ones may) keeps Drive, as it did
 * before phones were told apart (#1072). Safari signs in through its native app.
 */
import type { FormFactor } from '@/core/types/formFactor';
import { getVoyagerBuildTarget, isSafari } from '@/core/utils/browser';
import { readPlatformFormFactor } from '@/core/utils/formFactor';

export function hasGoogleSignInApi(): boolean {
  if (getVoyagerBuildTarget() === 'safari' || isSafari()) return true;
  const identity = globalThis.chrome?.identity;
  return (
    typeof identity?.getAuthToken === 'function' ||
    typeof identity?.launchWebAuthFlow === 'function'
  );
}

export function googleDriveUnavailableOn(formFactor: FormFactor | null): boolean {
  return formFactor === 'mobile' && !hasGoogleSignInApi();
}

/** Background: the same answer, on the device this browser reports. */
export async function canSignInToGoogleDrive(
  readFormFactor: () => Promise<FormFactor> = readPlatformFormFactor,
): Promise<boolean> {
  return !googleDriveUnavailableOn(await readFormFactor());
}
