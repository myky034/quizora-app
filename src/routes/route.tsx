import { createBrowserRouter } from "react-router-dom";

import { SplashPage } from "@/pages/SplashPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: SplashPage,
  }
]);
