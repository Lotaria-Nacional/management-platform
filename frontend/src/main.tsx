import "./index.css";

import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { router } from "./router/router.tsx";
import { queryClient } from "./lib/tanstack.ts";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import PageFallback from "./components/shared/page-fallback.tsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<PageFallback />}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <ToastContainer position="bottom-right" autoClose={200} hideProgressBar />
    </Suspense>
  </StrictMode>
);
