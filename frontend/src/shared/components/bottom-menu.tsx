import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { userRole } from "./sidebar";
import { IoMenu } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { checkPermission } from "../utils/check-permission";
import { MOBILE_NAV_LINKS } from "@/app/routes/routes-config";

function BottomMenu() {
  return (
    <nav className="fixed bg-RED-200 h-bottom-menu bottom-0 lg:hidden flex w-full p-container">
      <ul className="w-full flex items-center justify-between">
        {MOBILE_NAV_LINKS[0].map(
          (link, index) =>
            checkPermission(link.permissions, userRole) && (
              <li key={index}>
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    `flex flex-col gap-1 items-center ${
                      isActive ? "text-YELLOW" : "text-white"
                    }`
                  }
                >
                  {<link.icon size={24} />}
                  <span className="text-[12px]">{link.label}</span>
                </NavLink>
              </li>
            )
        )}
        <li className="flex flex-col text-white items-center justify-center gap-1">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex flex-col gap-1 items-center text-[12px]">
              <IoMenu size={24} />
              <span className="text-[12px]">Menu</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-RED-200">
              {MOBILE_NAV_LINKS[1].map(
                (link, index) =>
                  checkPermission(link.permissions, userRole) && (
                    <DropdownMenuItem key={index} className="text-white">
                      {<link.icon size={20} className="text-white" />}
                      <span>{link.label}</span>
                    </DropdownMenuItem>
                  )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </nav>
  );
}

export default BottomMenu;
