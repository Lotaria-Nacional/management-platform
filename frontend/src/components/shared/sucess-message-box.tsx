import Icon from "./icon";

export default function SuccessMessageBox() {
  return (
    <div className="flex gap-4 flex-col items-center justify-center min-w-[321px] p-[32px] h-[297px] bg-white rounded-[8px] shadow-lg">
      <Icon name="success" className="size-[87px]" />
      <h2>Registrado com sucesso</h2>
    </div>
  );
}
