import { Input } from "@/components/ui/input";

type Props = {
  name: string;
};

function ItemInput({ name }: Props) {
  return (
    <label
      htmlFor={name}
      className="w-full flex h-input items-center p-4 rounded-[8px] bg-white justify-between shadow-input"
    >
      <span>{name}</span>
      <Input id={name} type="checkbox" className="size-3 accent-RED-100" />
    </label>
  );
}

export default ItemInput;
