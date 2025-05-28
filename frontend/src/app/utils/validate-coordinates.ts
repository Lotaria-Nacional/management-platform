export function isValidCoordinates(input: string): boolean {
  const regex = /^\s*(-?\d{1,2}(?:\.\d+)?),\s*(-?\d{1,3}(?:\.\d+)?)\s*$/
  const match = input.match(regex)
  if (!match) return false

  const lat = parseFloat(match[1])
  const lng = parseFloat(match[2])

  return lat >= -90 && lat <= 90 && lng >= -180 && lng <= 180
}
