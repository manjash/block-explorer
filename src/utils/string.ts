export const getDisplayShortHash = (hash: string, number = 4): string => {
  return `${hash.substr(0, number)}...${hash.substr(
    hash.length - number,
    hash.length,
  )}`.toUpperCase()
}

export const truncateGraffitiToLimit = (graffiti: string, number = 32): string => {
  if (graffiti.length < number) {
    return graffiti
  } else {
    return `${graffiti.substr(0, number - 3)}...`
  }
}
