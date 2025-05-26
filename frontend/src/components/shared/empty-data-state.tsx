type Props = {
  text?: string;
};

function EmptyDataState({ text }: Props) {
  return (
    <div className="w-full h-10 flex items-center justify-center">
      <span>{text ?? "Não há dados ainda."}</span>
    </div>
  );
}

export default EmptyDataState;
