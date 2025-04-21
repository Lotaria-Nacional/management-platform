const generatePrice = () => {
  const value = Math.floor(Math.random() * 1000)
  const price = new Intl.NumberFormat("pt-PT", {
    currency: "AKZ",
    maximumFractionDigits: 2,
    style: "currency",
  }).format(value)
  return price
}

export const TERMINAL_AND_POS_DATA = Array.from({ length: 15 }, (_, index) => ({
  id: index + 1,
  agentId: Math.floor(Math.random() * 1000),
  area: "Area A",
  zone: "Zona " + index * 3,
  sales: generatePrice(),
  actualBalance: generatePrice(),
  state: index % 2 === 0,
}))
