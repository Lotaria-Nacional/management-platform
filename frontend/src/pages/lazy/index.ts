import { lazy } from "react"

const PosPage = lazy(() => import("@/pages/dashboard/pos-page"))
const AgentsPage = lazy(() => import("@/pages/dashboard/agents-page"))
const PrizesPage = lazy(() => import("@/pages/dashboard/prizes-page"))
const TicketsPage = lazy(() => import("@/pages/dashboard/tickets-page"))
const OverViewPage = lazy(() => import("@/pages/dashboard/overview-page"))
const SettingsPage = lazy(() => import("@/pages/dashboard/settings-page"))
const SalesPointPage = lazy(() => import("@/pages/dashboard/sales-point-page"))
const SaleChannelsPage = lazy(() => import("@/pages/dashboard/sale-channels-page"))
const TerminalsPage = lazy(() => import("@/pages/dashboard/terminals-page"))
const GuidePage = lazy(() => import("@/pages/dashboard/guide-page"))


export {
  OverViewPage,
  PrizesPage,
  TicketsPage,
  SettingsPage,
  SalesPointPage,
  SaleChannelsPage,
  TerminalsPage,
  GuidePage,
  PosPage,
  AgentsPage
}
