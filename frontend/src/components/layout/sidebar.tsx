import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import React from "react";
import Icon from "../shared/icon";
import { Button } from "../ui/button";
import { Link, NavLink } from "react-router-dom";
import whiteLogo from "@/assets/icons/white-logotipo.svg";
import { checkPermission } from "@/app/utils/check-permission";
import { Permission, DESKTOP_NAV_LINKS } from "@/app/constants/navigation";

export const userRole: Permission = "admin";

function Sidebar() {
  const [openCollapsible, setOpenCollapsible] = React.useState<string | null>(
    null
  );

  return (
    <aside
      className={`fixed hidden lg:flex flex-col gap-2 w-sidebar overflow-x-hidden top-0 left-0 z-10 h-screen bg-RED-700`}
    >
      <nav className="min-h-[537.38px] flex flex-col gap-4 px-[10px]">
        <Link to={"/"} className="relative w-[120px] h-[88px]">
          <img
            src={whiteLogo}
            className="absolute top-0 left-0 w-full h-full ml-[9px] object-contain"
            alt="logotipo"
          />
        </Link>

        <ul className="flex flex-col gap-1 text-white w-full">
          {DESKTOP_NAV_LINKS[0].map(
            (route, index) =>
              checkPermission(route.permissions, userRole) &&
              (route.collapsible ? (
                <li
                  key={route.label}
                  className={`${
                    openCollapsible === route.label && "bg-RED-800"
                  } flex items-center gap-2 w-full hover:bg-RED-800 hover:text-YELLOW duration-200 ease-in-out cursor-pointer transition-all rounded-lg py-2 px-2`}
                >
                  <Collapsible
                    className="w-full"
                    open={openCollapsible === route.label}
                    onOpenChange={(isOpen) =>
                      setOpenCollapsible(isOpen ? route.label : null)
                    }
                  >
                    <div className="flex items-center justify-between space-x-4">
                      <NavLink
                        to={route.link}
                        className={"flex items-center gap-1"}
                      >
                        {<Icon name={route.icon} className="size-5" />}
                        <span className="text-sm">{route.label}</span>
                      </NavLink>
                      <CollapsibleTrigger asChild className="pl-1">
                        <Button
                          size={"icon"}
                          variant={"ghost"}
                          className="size-6 hover:bg-RED-700"
                        >
                          {openCollapsible === route.label ? (
                            <Icon name="arrow_up" className="size-2" />
                          ) : (
                            <Icon name="arrow_down" className="size-2" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    <CollapsibleContent className="ml-2 text-sm space-y-2 rounded-lg pt-3">
                      {route.collapsible.map((subRoute, index) => (
                        <NavLink
                          key={index}
                          to={subRoute.link}
                          className="flex items-center gap-1 hover:bg-RED-700 transition-all duration-200 ease-in-out p-2 rounded-[4px]"
                        >
                          <span className="text-sm">{subRoute.label}</span>
                        </NavLink>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </li>
              ) : (
                <li key={index}>
                  <NavLink
                    to={route.link}
                    className={({ isActive }) =>
                      `${
                        isActive ? "bg-RED-800 text-YELLOW" : "text-white"
                      } flex items-center gap-2 w-full hover:bg-RED-800 hover:text-YELLOW duration-200 ease-in-out cursor-pointer transition-all rounded-lg py-3 px-2`
                    }
                  >
                    {<Icon name={route.icon} className="size-5" />}
                    <span className="text-sm">{route.label}</span>
                  </NavLink>
                </li>
              ))
          )}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
