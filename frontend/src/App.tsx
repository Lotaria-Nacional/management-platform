import { Outlet } from "react-router-dom";
import Header from "@/components/layout/header";
import Sidebar from "@/components/layout/sidebar";
import BottomMenu from "@/components/layout/bottom-menu";


function App() {
  return (
    <main className="flex flex-col">
      <Header />
      <div className="relative flex min-h-[calc(100vh-88px)] lg:pb-0 pb-bottom-menu-safe-area">
        <Sidebar />
        <section className=" w-full bg-[#F7F8FA] lg:pl-sidebar-safe-area">
          <Outlet />
        </section>
      </div>
      <BottomMenu />
    </main>
  );
}

export default App;
