import { lazy } from "react"

const PosPage = lazy(() => import("@/pages/protected/pos-page"))
const AgentsPage = lazy(() => import("@/pages/protected/agents-page"))
const PrizesPage = lazy(() => import("@/pages/protected/prizes-page"))
const TicketsPage = lazy(() => import("@/pages/protected/tickets-page"))
const OverViewPage = lazy(() => import("@/pages/protected/overview-page"))
const SettingsPage = lazy(() => import("@/pages/protected/settings-page"))
const SalesPointPage = lazy(() => import("@/pages/protected/sales-point-page"))
const SaleChannelsPage = lazy(() => import("@/pages/protected/sale-channels-page"))
const TerminalsPage = lazy(() => import("@/pages/protected/terminals-page"))
const GuidePage = lazy(() => import("@/pages/protected/guide-page"))
const RevisionPage = lazy(() => import("@/pages/protected/revision-page"))
const RevisionHistoryPage = lazy(() => import("@/pages/protected/revision-history-page"))

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
  AgentsPage,
  RevisionPage,
  RevisionHistoryPage
}
