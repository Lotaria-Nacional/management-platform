import { IoClose } from "react-icons/io5";
import { Button } from "../ui/button";

type Props = {
  previewImage: string | null;
  setValue: (name: string, value: any) => void;
  setPreviewImage: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function PreviewImage({
  previewImage,
  setPreviewImage,
  setValue,
}: Props) {
  if (!previewImage) return;
  return (
    <div className="relative w-full h-[200px]">
      <Button
        size="icon"
        variant={"secondary"}
        onClick={() => {
          setValue("image", null);
          setPreviewImage(null);
          URL.revokeObjectURL(previewImage);
        }}
        className="absolute right-0 cursor-pointer z-20"
      >
        <IoClose />
      </Button>
      <img
        loading="lazy"
        className="absolute w-full top-0 left-0 h-full object-contain"
        src={previewImage}
      />
    </div>
  );
}
