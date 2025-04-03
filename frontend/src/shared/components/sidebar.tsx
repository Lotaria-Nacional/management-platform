import { Link, NavLink } from "react-router-dom";
import whiteLogo from "@/assets/icons/white-logotipo.svg";
import { checkPermission } from "../utils/check-permission";
import { Permission, DESKTOP_NAV_LINKS } from "@/app/routes/routes-config";

export const userRole: Permission = "admin";

function Sidebar() {
  return (
    <aside className="fixed hidden lg:flex px-2 flex-col gap-2 w-sidebar top-0 left-0 z-10 h-screen bg-RED-200">
      <section className="min-h-[537.38px] flex flex-col gap-4 p-container">
        <Link to={"/"} className="relative w-[120px] h-[88px]">
          <img
            src={whiteLogo}
            className="absolute top-0 left-0 w-full h-full ml-[9px] object-contain"
            alt="logotipo"
          />
        </Link>

        <ul className="flex flex-col gap-[24px] text-white w-full">
          {DESKTOP_NAV_LINKS[0].map(
            (route, index) =>
              checkPermission(route.permissions, userRole) && (
                <li key={index}>
                  <NavLink
                    to={route.link}
                    className={({ isActive }) =>
                      `${
                        isActive ? "bg-RED-100 text-YELLOW" : "text-white"
                      } flex items-center gap-2 w-full hover:bg-RED-100 hover:text-YELLOW duration-200 ease-in-out cursor-pointer transition-all rounded-lg p-2`
                    }
                  >
                    {<route.icon size={22} />}
                    <span>{route.label}</span>
                  </NavLink>
                </li>
              )
          )}

          <hr className="text-white" />

          {DESKTOP_NAV_LINKS[1].map(
            (route, index) =>
              checkPermission(route.permissions, userRole) && (
                <li key={index}>
                  <NavLink
                    to={route.link}
                    className={({ isActive }) =>
                      `${
                        isActive ? "bg-RED-100 text-YELLOW" : "text-white"
                      } flex items-center gap-2 w-full hover:bg-RED-100 hover:text-YELLOW duration-200 ease-in-out cursor-pointer transition-all rounded-lg p-2`
                    }
                  >
                    {<route.icon size={22} />}
                    <span>{route.label}</span>
                  </NavLink>
                </li>
              )
          )}
        </ul>
      </section>
    </aside>
  );
}

export default Sidebar;
