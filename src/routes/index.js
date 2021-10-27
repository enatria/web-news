import { lazy } from 'react';

const AppRoutes = [
  {
    path: '/',
    component: lazy(() => import('../pages/Indonesia')),
    exact: true,
    heroLayout: true
  },
];

export { AppRoutes };
