import { Navigate, RouteObject } from "react-router-dom";

import {
  AuthScene,
  DashboardScene,
  HomeScene,
  AnalyticsScene,
  ProfileScene,
  GameCatalog,
} from "./constants/lazy-load.constant";
import { HomeLayout, AppLayout } from "@layouts";

export const homeRoute: RouteObject[] = [
  {
    path: "",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <HomeScene />,
      },
      {
        path: "auth",
        element: <AuthScene />,
      },
    ],
  },
];

export const appRoute: RouteObject[] = [
  {
    path: "app",
    element: <AppLayout />,
    children: [
      { element: <Navigate to="dashboard" replace />, index: true },
      {
        path: "dashboard",
        element: <DashboardScene />,
      },
      {
        path: "analytics",
        element: <AnalyticsScene />,
      },
      {
        path: "profile",
        element: <ProfileScene />,
      },
      {
        path: "catalog",
        element: <GameCatalog />,
      },
    ],
  },
];
