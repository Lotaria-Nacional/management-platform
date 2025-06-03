import { ICONS } from "@/assets";

export type Permission = "admin" | "dev" | "user"
export type IconType = keyof typeof ICONS

type RouteType = {
    label:string
    link:string
    icon:IconType
    permissions:Permission[]
    collapsible?:{
        label:string
        link:string
        icon?:IconType
    }[]
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
                icon:'overview',
                permissions:["dev", "admin", "user"]
            },
            {
                label:"Terminais",
                link:"terminais",
                icon:"terminal",
                permissions:["admin", "dev"]
            },
            {
                label:"Agentes",
                link:"agentes",
                icon:"agentes",
                collapsible:[
                    {
                        label:"Histórico de atividades",
                        link:"/agentes/historico-de-atividades",
                    },  
                    {
                        label:"Supervisão",
                        link:"/agentes/supervisao",
                    },
                    {
                        label:"Histórico de Supervisão",
                        link:"/agentes/historico-de-supervisao",
                    },
                ],
                permissions:["admin", "dev"]
            },
            {
                label:"Pontos de Venda",
                link:"pos",
                icon:"pos",
                permissions:["admin", "dev"]
            },
            {
                label:"Licenças",
                link:"licencas",
                icon:"licence",
                permissions:["admin", "dev"]
            },
        ],
        []
        ]
    },

    mobile:{
        routes:[
            [{
                label:"Visão Geral",
                link:"/",
                icon:"overview",
                permissions:["dev", "admin", "user"]
            },
           ],
            [ 
            {
                label:"Terminais",
                link:"terminais",
                icon:"terminal",
                permissions:["admin", "dev"]
            },
            {
                label:"Pontos de Venda",
                link:"pos",
                icon:"pos",
                permissions:["admin", "dev"]
            },
            {
                label:"Agentes",
                link:"agentes",
                icon:"agentes",
                permissions:["admin", "dev"]
            },
        ]
        ]
    }
}

export const DESKTOP_NAV_LINKS = NAVIGATION_LINKS.desktop.routes
export const MOBILE_NAV_LINKS = NAVIGATION_LINKS.mobile.routes