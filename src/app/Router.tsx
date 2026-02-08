import React, { lazy } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

import { ROUTES } from '@/config/';
import {
  AdditionaRoles,
  AmbassadorOverview,
  BasicDetails,
  CommunityPages,
  ExampleTasks,
  Home,
  LevelBenefits,
  LevelProgression,
  MemeGuide,
  PrivacyPolicy,
  TweetGuide,
  Whitepaper,
} from '@/pages';

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
          path: ROUTES.WHITEPAPER,
          element: <Whitepaper />,
        },
        {
          path: ROUTES.PRIVACY_POLICY,
          element: <PrivacyPolicy />,
        },
        // Ambassador Pages
        {
          path: ROUTES.AMBASSADORS.ROOT,
          element: <AmbassadorOverview />,
        },
        {
          path: ROUTES.AMBASSADORS.BASIC_DETAILS,
          element: <BasicDetails />,
        },
        {
          path: ROUTES.AMBASSADORS.EXAMPLE_TASKS,
          element: <ExampleTasks />,
        },
        {
          path: ROUTES.AMBASSADORS.LEVEL_BENEFITS,
          element: <LevelBenefits />,
        },
        {
          path: ROUTES.AMBASSADORS.LEVEL_PROGRESSION,
          element: <LevelProgression />,
        },
        {
          path: ROUTES.AMBASSADORS.ADDITIONAL_ROLES,
          element: <AdditionaRoles />,
        },
        {
          path: ROUTES.AMBASSADORS.TWEET_GUIDE,
          element: <TweetGuide />,
        },
        {
          path: ROUTES.AMBASSADORS.MEME_GUIDE,
          element: <MemeGuide />,
        },
        {
          path: ROUTES.AMBASSADORS.COMMUNITY_PAGES,
          element: <CommunityPages />,
        },
      ],
    },
    { path: '404', element: '' },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);
