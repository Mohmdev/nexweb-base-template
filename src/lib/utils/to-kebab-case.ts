export const toKebabCase = (string?: string | null): string =>
  (string || '')
    ?.replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .toLowerCase()