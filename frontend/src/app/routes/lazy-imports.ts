import { lazy } from "react";

const OverViewPage = lazy(()=> import("@/features/dashboard/overview-page"))

export {
    OverViewPage
}