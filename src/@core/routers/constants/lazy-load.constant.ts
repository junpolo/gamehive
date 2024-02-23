import { lazy } from "react";

// HOME
export const AuthScene = lazy(() => import("@scenes/Auth/auth.scene"));
export const HomeScene = lazy(() => import("@scenes/Home/home.scene"));

// APP
export const DashboardScene = lazy(
  () => import("@scenes/Dashboard/dashboard.scene")
);
