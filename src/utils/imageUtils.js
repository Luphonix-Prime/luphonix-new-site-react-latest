export const getImagePath = (path, folder = 'services') => {
  if (!path) return '';
  return `/${folder}/${path}`;
};