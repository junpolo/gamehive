import { lazy } from "react";

// AUTH
export const AuthScene = lazy(() => import("@/scenes/Auth/auth.scene"));

// APP
export const DashboardScene = lazy(
  () => import("@scenes/Dashboard/dashboard.scene")
);
