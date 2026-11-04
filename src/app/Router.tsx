import React, { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { ROUTES } from '@/config/';
import { Home, PrivacyPolicy, Terms } from '@/pages';

const MainLayout = lazy(() => import('../layouts/MainLayout/MainLayout'));

export const AppRouter: React.FC = (): React.ReactElement | null =>
  useRoutes([
    {
      path: ROUTES.HOME,
      element: <MainLayout />,
      children: [
        {
          path: ROUTES.HOME,
          element: <Home />,
        },
        {
          path: ROUTES.PRIVACY_POLICY,
          element: <PrivacyPolicy />,
        },
        {
          path: ROUTES.TERMS,
          element: <Terms />,
        },
      ],
    },
    { path: '404', element: '' },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
