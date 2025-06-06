import whiteLogo from "@/assets/icons/white-logotipo.svg";

export default function PageFallback() {
  return (
    <div className="px-8 w-full h-screen bg-RED-700 flex items-center justify-center flex-col gap-4">
      <img src={whiteLogo} alt="logotipo" className="w-52 h-20 ml-12" />
      <h2 className="text-white">Lotaria Nacional de Angola</h2>
    </div>
  );
}
