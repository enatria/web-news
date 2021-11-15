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
    path: "/saved",
    component: lazy(() => import("../pages/Saved")),
    exact: true,
    heroLayout: false,
  },
  {
    path: "/:id",
    component: lazy(() => import("../pages/NewsPage")),
    exact: true,
    heroLayout: false,
  },
];

export { AppRoutes };
