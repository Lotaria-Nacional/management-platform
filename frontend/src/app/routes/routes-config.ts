import { IconType } from "react-icons"
import { FaAward } from "react-icons/fa";
import { LiaReadme } from "react-icons/lia";
import { TbCashRegister } from "react-icons/tb";
import { LuLayoutDashboard } from "react-icons/lu";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { BsTicketPerforated } from "react-icons/bs";
import { LuSettings, LuUsersRound } from "react-icons/lu";

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
                link:"visao-geral",
                icon:LuLayoutDashboard,
                permissions:["dev", "admin", "user"]
            },
            {
                label:"Canais de Venda",
                link:"canais-de-venda",
                icon:FaMoneyBillTrendUp,
                permissions:["dev", "admin"]
            },
            {
                label:"Prémios",
                link:"premios",
                icon:FaAward,
                permissions:["admin"]
            },
            {
                label:"Bilhetes",
                link:"bilhetes",
                icon:BsTicketPerforated,
                permissions:["admin", "dev"]
            },
            {
                label:"Terminais e POS",
                link:"terminais-e-pos",
                icon:TbCashRegister,
                permissions:["admin", "dev"]
            },
            {
                label:"Pontos de Venda",
                link:"pontos-de-venda",
                icon:TbCashRegister,
                permissions:["admin", "dev"]
            },
            {
                label:"Usuários",
                link:"usuarios",
                icon:LuUsersRound,
                permissions:["admin"]
            },
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
                link:"visao-geral",
                icon:LuLayoutDashboard,
                permissions:["dev", "admin", "user"]
            },
            {
                label:"Canais de Venda",
                link:"canais-de-venda",
                icon:FaMoneyBillTrendUp,
                permissions:["dev", "admin"]
            },
            {
                label:"Prémios",
                link:"premios",
                icon:FaAward,
                permissions:["admin"]
            },
           ],
            [ 
            {
                label:"Bilhetes",
                link:"bilhetes",
                icon:BsTicketPerforated,
                permissions:["admin", "dev"]
            }
                ,{
                label:"Terminais e POS",
                link:"terminais-e-pos",
                icon:TbCashRegister,
                permissions:["admin", "dev"]
            },
            {
                label:"Terminais e POS",
                link:"terminais-e-pos",
                icon:TbCashRegister,
                permissions:["admin", "dev"]
            },
            {
                label:"Pontos de Venda",
                link:"pontos-de-venda",
                icon:TbCashRegister,
                permissions:["admin", "dev"]
            },
            {
                label:"Usuários",
                link:"usuarios",
                icon:LuUsersRound,
                permissions:["admin"]
            },
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