import { lazy } from 'react';

const AppRoutes = [
  {
    path: '/',
    component: lazy(() => import('../pages/Indonesia')),
    exact: true,
    heroLayout: true
  },
  {
    path: '/programming',
    component: lazy(() => import('../pages/Programming')),
    excact: false,
    heroLayout: false
  },
  {
    path: '/covid',
    component: lazy(() => import('../pages/Covid')),
    excact: false,
    heroLayout: false
  }
];

export { AppRoutes };
