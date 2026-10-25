import type { ManifestIssue } from '../manifest/validate';

/** Optional revocations are isolated from the plugin list, including on cache reads. */
export function readCatalogRevocations(raw: unknown, issues: ManifestIssue[] = []): string[] {
  if (raw === undefined) return [];
  if (!Array.isArray(raw)) {
    issues.push({ path: 'revoked', message: 'must be an array of plugin ids' });
    return [];
  }
  const ids = new Set<string>();
  raw.forEach((id, index) => {
    if (typeof id !== 'string' || id.trim() === '') {
      issues.push({ path: `revoked[${index}]`, message: 'must be a non-empty string' });
      return;
    }
    ids.add(id);
  });
  return [...ids];
}
