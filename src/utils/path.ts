export const getPath = (path: string): string => {
  const basePath = '/astro_seem';
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`;
}; 