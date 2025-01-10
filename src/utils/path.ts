export const getPath = (path: string): string => {
  const basePath = '/astro_seem';
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Combine paths and ensure trailing slash
  const fullPath = `${basePath}/${cleanPath}`;
  // Remove double slashes and ensure trailing slash
  return fullPath.replace(/\/+/g, '/').replace(/\/?$/, '/');
}; 