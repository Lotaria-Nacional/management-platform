type Props = {
  error?: string;
};

export default function FormMessageError({ error }: Props) {
  return <span className="text-RED-800 text-xs">{error}</span>;
}
