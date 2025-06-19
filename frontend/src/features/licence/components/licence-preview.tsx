type Props = {};

export default function LicencePreview({}: Props) {
  return (
    <div className="relative flex items-center justify-center h-[350px] w-full">
      <img
        alt="preview da lincença"
        src="/licence-example.jpeg"
        className="absolute w-full h-full object-cover"
      />
    </div>
  );
}
