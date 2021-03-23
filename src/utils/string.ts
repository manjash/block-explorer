export const getDisplayShortHash = (hash: string, number = 4): string => {
  return `${hash.substr(0, number)}...${hash.substr(
    hash.length - number,
    hash.length,
  )}`.toUpperCase()
}
