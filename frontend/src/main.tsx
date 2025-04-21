import { StrictMode, Suspense } from "react"
import { createRoot } from "react-dom/client"
import { router } from "./router/router.tsx"
import { RouterProvider } from "react-router-dom"
import PageFallback from "./components/shared/page-fallback.tsx"

import "./index.css"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<PageFallback />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
)
