import { lazy } from "react";

const AppRoutes = [
  {
    path: "/",
    component: lazy(() => import("../pages/Indonesia")),
    exact: true,
    heroLayout: true,
  },
  {
    path: "/:id",
    component: lazy(() => import("../pages/NewsPage")),
    exact: false,
    heroLayout: false,
  },
];

export { AppRoutes };
