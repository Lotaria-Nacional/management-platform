export const checkArrayData = <T>(data?: T[]) => {
  if (data) {
    if (data.length > 0 && Array.isArray(data)) {
      return true
    }
  }
  return false
}
