import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./app/routes/router.tsx";
import { RouterProvider } from "react-router-dom";
import LazyLoadingComponent from "./shared/components/lazy-loading-component.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<LazyLoadingComponent />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
