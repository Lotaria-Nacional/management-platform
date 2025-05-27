export const checkArrayData = (data?: any[]) => {
    if (data && data.length > 0 && Array.isArray(data)) {
      return true
    }
  return false
}
