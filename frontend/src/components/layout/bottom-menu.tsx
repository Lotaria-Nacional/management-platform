import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { IoMenu } from "react-icons/io5"
import { NavLink } from "react-router-dom"
import { userRole } from "@/components/layout/sidebar"
import { MOBILE_NAV_LINKS } from "@/constants/navigation"
import { checkPermission } from "@/utils/check-permission"

function BottomMenu() {
  return (
    <nav className="fixed bg-RED-200 z-[50] mi-h-bottom-menu bottom-0 lg:hidden flex w-full p-container py-3">
      <ul className="w-full flex items-center justify-between">
        {MOBILE_NAV_LINKS[0].map(
          (link, index) =>
            checkPermission(link.permissions, userRole) && (
              <li key={index}>
                <NavLink
                  to={link.link}
                  className={({ isActive }) =>
                    `flex flex-col gap-1 items-center hover:bg-YELLOW duration-200 ease-in-out transition-all rounded-lg ${
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
            <DropdownMenuContent className="bg-RED-200 w-[200px] mr-2 space-y-1 border-none px-0">
              {MOBILE_NAV_LINKS[1].map(
                (link, index) =>
                  checkPermission(link.permissions, userRole) && (
                    <DropdownMenuItem key={index}>
                      <NavLink
                        to={link.link}
                        className={({ isActive }) =>
                          `${
                            isActive && "bg-YELLOW"
                          } flex items-center gap-2 text-white px-2 text-xl py-3 h-full rounded-sm text-[12px] w-full`
                        }
                      >
                        {<link.icon size={32} className="text-white" />}
                        {link.label}
                      </NavLink>
                    </DropdownMenuItem>
                  )
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
      </ul>
    </nav>
  )
}

export default BottomMenu
