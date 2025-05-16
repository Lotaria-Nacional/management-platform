import { Input } from "@/components/ui/input";

type Props = {
  name: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function ItemInput({ name, checked, onChange }: Props) {
  return (
    <label
      htmlFor={name}
      className="w-full flex h-input items-center p-4 rounded-[8px] bg-white justify-between shadow-input"
    >
      <span>{name}</span>
      <Input
        id={name}
        type="checkbox"
        className="size-3 accent-RED-100"
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
}
