import { lazy } from "react";

const PrizesPage = lazy(()=> import("@/pages/dashboard/prizes-page"))
const TicketsPage = lazy(()=> import("@/pages/dashboard/tickets-page"))
const OverViewPage = lazy(()=> import("@/pages/dashboard/overview-page"))
const SettingsPage = lazy(()=> import("@/pages/dashboard/settings-page"))
const SalesPointPage = lazy(()=> import("@/pages/dashboard/sales-point-page"))
const SaleChannelsPage = lazy(()=> import("@/pages/dashboard/sale-channels-page"))
const TerminalAndPosPage = lazy(()=> import("@/pages/dashboard/terminal-and-pos-page"))
const GuidePage = lazy(()=> import("@/pages/dashboard/guide-page"))

export {
    OverViewPage,
    PrizesPage,
    TicketsPage,
    SettingsPage,
    SalesPointPage,
    SaleChannelsPage,
    TerminalAndPosPage,
    GuidePage
}