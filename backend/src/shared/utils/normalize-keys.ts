export function normalizeKeys(obj: Record<string, any>) {
  const normalized: Record<string, any> = {};
  for (const key in obj) {
    const cleanKey = key.toLowerCase().replace(/\s+/g, "");
    normalized[cleanKey] = obj[key];
  }
  return normalized;
}
