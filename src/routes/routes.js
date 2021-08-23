import { lazy } from 'react';

const routes = [
  {
    path: 'dashboard',
    component: lazy(() => import('components/features/Dashboard')),
    exact: true,
  },
  {
    path: 'users',
    component: lazy(() => import('components/features/Users')),
    exact: true,
  },
  {
    path: 'account',
    component: lazy(() => import('pages/organization/AccountScreen')),
    exact: true,
  },
  {
    path: 'join-ogranization',
    component: lazy(() => import('pages/organization/JoinOrganizationScreen')),
    exact: true,
  },
];

export default routes;
