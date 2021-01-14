export const getDisplayShortHash = (hash: string): string => {
  return `${hash.substr(0, 4)}...${hash.substr(hash.length - 4, hash.length)}`
}
