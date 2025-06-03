export const checkAgentAlert = (alert: string) => {
    return alert.includes("Baixa venda")
      ? "bg-RED-200 text-RED-600"
      : alert.includes("Boa performance")
      ? "bg-GREEN-200 text-GREEN-600"
      : "bg-YELLOW-200 text-YELLOW-600";
  };


export type ValueProps = "bg" | "text" | "label";

export const checkValue = (type: ValueProps, value: boolean | null) => {
  switch (type) {
    case "bg":
      return value
        ? "bg-GREEN-100"
        : value === false
        ? "bg-RED-100"
        : "bg-GRAY-100";
    case "text":
      return value
        ? "text-GREEN-700"
        : value === false
        ? "text-RED-700"
        : "text-GRAY-600";
    case "label":
      return value ? "possui" : value === false ? "em falta" : "sem revisão";
  }
};