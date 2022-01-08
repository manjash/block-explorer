export const round = (value: number, places: number): string => {
  const scalar = Math.pow(10, places)
  return (Math.round(value * scalar) / scalar).toFixed(places)
}
