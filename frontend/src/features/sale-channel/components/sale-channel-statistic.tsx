type Props = {
  name: string;
  amount: number;
};

function SaleChannelStatistic({ amount, name }: Props) {
  return (
    <div className="flex flex-col gap-1 min-w-[55px]">
      <h3 className="text-[12px]">{name}</h3>
      <span className="text-[20px] font-medium">{amount}</span>
    </div>
  );
}

export default SaleChannelStatistic;
