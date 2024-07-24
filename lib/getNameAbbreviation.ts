const getNameAbbreviation = (name?: string): string | undefined => {
  if (!name) {
    return undefined;
  }
  return name
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');
};

export default getNameAbbreviation;
