import {
  OverViewPage,
  GuidePage,
  PrizesPage,
  SaleChannelsPage,
  SalesPointPage,
  SettingsPage,
  TerminalAndPosPage,
  TicketsPage,
} from "@/pages/lazy"
import App from "@/App"
import UsersPage from "@/pages/dashboard/users-page"
import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: <></>,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <OverViewPage />,
      },
      {
        path: "canais-de-venda",
        element: <SaleChannelsPage />,
      },
      {
        path: "premios",
        element: <PrizesPage />,
      },
      {
        path: "bilhetes",
        element: <TicketsPage />,
      },
      {
        path: "terminais-e-pos",
        element: <TerminalAndPosPage />,
      },
      {
        path: "pontos-de-venda",
        element: <SalesPointPage />,
      },
      {
        path: "usuarios",
        element: <UsersPage />,
      },
      {
        path: "configuracoes",
        element: <SettingsPage />,
      },
      {
        path: "guia",
        element: <GuidePage />,
      },
    ],
  },
])
