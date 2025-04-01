import { NavLink } from "react-router-dom";
import { checkPermission } from "../utils/check-permission";
import { Permission, SIDEBAR_ROUTES } from "@/app/routes/routes-config";

function Sidebar() {
  const userRole: Permission = "admin";

  return (
    <aside className="fixed flex px-2 flex-col gap-2 w-sidebar top-0 left-0 z-10 h-screen bg-RED-200">
      <section className="h-[537.38px] flex flex-col gap-4">
        <img
          src="/src/assets/icons/white-logotipo.svg"
          className="w-[120px] h-[88px] object-contain self-center"
          alt="logotipo"
        />

        <ul className="flex flex-col gap-2 text-white w-full px-4">
          {SIDEBAR_ROUTES[0].map(
            (route, index) =>
              checkPermission(route.permissions, userRole) && (
                <li
                  key={index}
                  className="flex hover:bg-RED-100 text-white hover:text-YELLOW duration-200 ease-in-out cursor-pointer transition-all rounded-lg w-full p-2"
                >
                  <NavLink
                    to={route.link}
                    className="flex items-center gap-2 w-full"
                  >
                    {<route.icon size={22} />}
                    <span>{route.label}</span>
                  </NavLink>
                </li>
              )
          )}

          <hr className="text-white" />

          {SIDEBAR_ROUTES[1].map(
            (route, index) =>
              checkPermission(route.permissions, userRole) && (
                <li
                  key={index}
                  className="flex w-full hover:bg-RED-100 text-white hover:text-YELLOW duration-200 ease-in-out cursor-pointer transition-all rounded-lg p-2"
                >
                  <NavLink
                    to={route.link}
                    className="flex items-center w-full gap-2"
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
