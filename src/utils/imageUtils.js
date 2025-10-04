export const getImagePath = (imageName, category = 'services') => {
  if (!imageName) return '';
  return `/images/${category}/${imageName}`;
};