import Header from "./shared/components/header";
import Sidebar from "./shared/components/sidebar";
import BottomMenu from "./shared/components/bottom-menu";

import { Outlet } from "react-router-dom";

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
