import Header from "./shared/components/header";
import Sidebar from "./shared/components/sidebar";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="flex flex-col">
      <Header />

      <div className="relative flex h-[calc(100vh-88px)]">
        <Sidebar />
        <section className="pl-sidebar-safe-area">
          <Outlet />
        </section>
      </div>
    </main>
  );
}

export default App;
