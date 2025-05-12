import { ASSETS } from "@/assets/icons";

export type Permission = "admin" | "dev" | "user"

type RouteType = {
    label:string
    link:string
    icon:keyof typeof ASSETS
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
                icon:'overview',
                permissions:["dev", "admin", "user"]
            },
            {
                label:"Canais de Venda",
                link:"canais-de-venda",
                icon:"canais_de_venda",
                permissions:["dev", "admin"]
            },
            {
                label:"Prémios",
                link:"premios",
                icon:'premio',
                permissions:["admin"]
            },
            {
                label:"Bilhetes",
                link:"bilhetes",
                icon:"bilhete",
                permissions:["admin", "dev"]
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
                permissions:["admin", "dev"]
            },
            {
                label:"Pontos de Venda",
                link:"pos",
                icon:"pos",
                permissions:["admin", "dev"]
            },
        ],
        [
            {
                label:"Configurações",
                link:"configuracoes",
                icon:"configuracoes",
                permissions:["admin"]
            },
            {
                label:"Guia",
                link:"guia",
                icon:"gallery",
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
                icon:"overview",
                permissions:["dev", "admin", "user"]
            },
            {
                label:"Canais de Venda",
                link:"canais-de-venda",
                icon:"canais_de_venda",
                permissions:["dev", "admin"]
            },
            {
                label:"Prémios",
                link:"premios",
                icon:"premio",
                permissions:["admin"]
            },
           ],
            [ 
            {
                label:"Bilhetes",
                link:"bilhetes",
                icon:"bilhete",
                permissions:["admin", "dev"]
            },
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
                {
                label:"Configurações",
                link:"configuracoes",
                icon:"configuracoes",
                permissions:["admin"]
            },
            {
                label:"Guia",
                link:"guia",
                icon:"agentes",
                permissions:["admin"]
            },       
        
        ]
        ]
    }
}

export const DESKTOP_NAV_LINKS = NAVIGATION_LINKS.desktop.routes
export const MOBILE_NAV_LINKS = NAVIGATION_LINKS.mobile.routes