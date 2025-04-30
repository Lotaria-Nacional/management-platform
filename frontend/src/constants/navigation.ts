import { IconType } from "react-icons"
import { BsShop } from "react-icons/bs";
import { LiaReadme } from "react-icons/lia";
import { CiCalculator1 } from "react-icons/ci";
import { IoTrophyOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsTicketPerforated } from "react-icons/bs";
import { LuSettings } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaUsers } from "react-icons/fa6";

export type Permission = "admin" | "dev" | "user"

type RouteType = {
    label:string
    link:string
    icon:IconType
    permissions:Permission[]
}[][] 

type NavigationLinksType = {
  desktop: {
    routes: RouteType;
  };

  mobile: {
    routes: RouteType;
  };
};

const NAVIGATION_LINKS:NavigationLinksType = {
    desktop:{
        routes:[
        [
            {
                label:"Visão Geral",
                link:"/",
                icon:LuLayoutDashboard,
                permissions:["dev", "admin", "user"]
            },
            {
                label:"Canais de Venda",
                link:"canais-de-venda",
                icon:BsShop,
                permissions:["dev", "admin"]
            },
            {
                label:"Prémios",
                link:"premios",
                icon:IoTrophyOutline,
                permissions:["admin"]
            },
            {
                label:"Bilhetes",
                link:"bilhetes",
                icon:BsTicketPerforated,
                permissions:["admin", "dev"]
            },
            {
                label:"Terminais",
                link:"terminais",
                icon:CiCalculator1,
                permissions:["admin", "dev"]
            },
            {
                label:"Agentes",
                link:"agentes",
                icon:FaUsers,
                permissions:["admin", "dev"]
            },
            {
                label:"Pontos de Venda",
                link:"pos",
                icon:HiOutlineLocationMarker,
                permissions:["admin", "dev"]
            },
            // {
            //     label:"Usuários",
            //     link:"usuarios",
            //     icon:LuUsersRound,
            //     permissions:["admin"]
            // },
        ],
        [
            {
                label:"Configurações",
                link:"configuracoes",
                icon:LuSettings,
                permissions:["admin"]
            },
            {
                label:"Guia",
                link:"guia",
                icon:LiaReadme,
                permissions:["admin"]
            },       
        ]
        ]
    },

    mobile:{
        routes:[
            [{
                label:"Visão Geral",
                link:"/",
                icon:LuLayoutDashboard,
                permissions:["dev", "admin", "user"]
            },
            {
                label:"Canais de Venda",
                link:"canais-de-venda",
                icon:BsShop,
                permissions:["dev", "admin"]
            },
            {
                label:"Prémios",
                link:"premios",
                icon:IoTrophyOutline,
                permissions:["admin"]
            },
           ],
            [ 
            {
                label:"Bilhetes",
                link:"bilhetes",
                icon:BsTicketPerforated,
                permissions:["admin", "dev"]
            },
            {
                label:"Terminais",
                link:"terminais",
                icon:CiCalculator1,
                permissions:["admin", "dev"]
            },
            {
                label:"Pontos de Venda",
                link:"pos",
                icon:HiOutlineLocationMarker,
                permissions:["admin", "dev"]
            },
            {
                label:"Agentes",
                link:"agentes",
                icon:FaUsers,
                permissions:["admin", "dev"]
            },
            // {
            //     label:"Usuários",
            //     link:"usuarios",
            //     icon:LuUsersRound,
            //     permissions:["admin"]
            // },
                {
                label:"Configurações",
                link:"configuracoes",
                icon:LuSettings,
                permissions:["admin"]
            },
            {
                label:"Guia",
                link:"guia",
                icon:LiaReadme,
                permissions:["admin"]
            },       
        
        ]
        ]
    }
}

export const DESKTOP_NAV_LINKS = NAVIGATION_LINKS.desktop.routes
export const MOBILE_NAV_LINKS = NAVIGATION_LINKS.mobile.routes