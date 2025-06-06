type Props = {
  state: "active" | "on-boarding" | "canceled";
  percentage: number;
};

function TerminalProgressLine({ state, percentage }: Props) {
  const STATE =
    state === "active"
      ? "Activos"
      : state === "on-boarding"
      ? "Em branco"
      : "Cancelados";

  const BG_COLOR =
    state === "active"
      ? "bg-GREEN-600"
      : state === "on-boarding"
      ? "bg-ORANGE"
      : "bg-RED-600";

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between w-full">
        <span>{STATE}</span>
        <span>{percentage}%</span>
      </div>
      <div className="relative w-full h-[8px] bg-GRAY-100 rounded-full border">
        <div
          style={{
            width: `${percentage}%`,
          }}
          className={`absolute h-[90%] rounded-full ${BG_COLOR}`}
        />
      </div>
    </div>
  );
}

export default TerminalProgressLine;
