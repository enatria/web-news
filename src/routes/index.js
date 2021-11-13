import { lazy } from "react";

const AppRoutes = [
  {
    path: "/",
    component: lazy(() => import("../pages/Indonesia")),
    exact: true,
    heroLayout: true,
  },
  {
    path: "/programming",
    component: lazy(() => import("../pages/Programming")),
    exact: true,
    heroLayout: false,
  },
  {
    path: "/covid",
    component: lazy(() => import("../pages/Covid")),
    exact: true,
    heroLayout: false,
  },
  {
    path: "/:id",
    component: lazy(() => import("../pages/NewsPage")),
    exact: false,
    heroLayout: false,
  },
];

export { AppRoutes };
