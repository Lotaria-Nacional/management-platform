import "./index.css";

import { StrictMode, Suspense } from "react";
import { router } from "./app/router/router.tsx";
import { createRoot } from "react-dom/client";
import { queryClient } from "./lib/tanstack.ts";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import PageFallback from "./components/shared/page-fallback.tsx";

import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<PageFallback />}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
      <ToastContainer
        autoClose={200}
        hideProgressBar
        position={"bottom-right"}
      />
    </Suspense>
  </StrictMode>
);
