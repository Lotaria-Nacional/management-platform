import { useRef } from "react";
import Icon from "@/components/shared/icon";
import Button from "@/components/shared/button";
import PageHeader from "@/components/shared/page-header";
import PageContainer from "@/components/layout/page-container";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import PageHeaderTitle from "@/components/shared/page-header-title";
import UploadFileDialogForm from "@/features/terminal-and-pos/components/upload-file-dialog-form";

function TerminalAndPosPage() {
  const refreshButtonRef = useRef<HTMLButtonElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleRefresh = () => {
    const icon = refreshButtonRef.current
      ?.firstElementChild as HTMLElement | null;

    if (icon) {
      icon.classList.add("animate-full-rotation");
      icon.addEventListener(
        "animationend",
        () => {
          icon.classList.remove("animate-full-rotation");
        },
        { once: true }
      );
    }
  };

  const handleNavigate = (path: "comercial" | "financeiro") => {
    navigate(path);
  };

  const isActive = location.pathname.includes("comercial");

  const comercialActiveButtonStyle = isActive
    ? "bg-YELLOW"
    : "bg-transparent !text-black";
  const financesActiveButtonStyle = !isActive
    ? "bg-YELLOW"
    : "bg-transparent !text-black";

  return (
    <PageContainer>
      <PageHeader>
        <div className="flex items-center gap-4">
          <PageHeaderTitle>Terminal & POS</PageHeaderTitle>
          <div className="flex items-center gap-4">
            <Button
              variant="link"
              className={comercialActiveButtonStyle}
              onClick={() => handleNavigate("comercial")}
            >
              Comercial
            </Button>
            <Button
              variant="link"
              className={financesActiveButtonStyle}
              onClick={() => handleNavigate("financeiro")}
            >
              Financeiro
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button
            variant="white"
            ref={refreshButtonRef}
            onClick={handleRefresh}
          >
            <Icon name="refresh" className="" />
          </Button>
          <UploadFileDialogForm />
        </div>
      </PageHeader>
      <Outlet />
    </PageContainer>
  );
}

export default TerminalAndPosPage;
