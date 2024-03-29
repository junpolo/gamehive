import { lazy } from "react";

import { Suspense } from "@components";

// HOME
export const AuthScene = Suspense(
  lazy(() => import("@scenes/Auth/auth.scene"))
);
export const HomeScene = Suspense(
  lazy(() => import("@scenes/Home/home.scene"))
);

// APP
export const DashboardScene = Suspense(
  lazy(() => import("@scenes/Dashboard/dashboard.scene"))
);

export const AnalyticsScene = Suspense(
  lazy(() => import("@scenes/Analytics/analytics.scene"))
);

export const ProfileScene = Suspense(
  lazy(() => import("@scenes/Profile/profile.scene"))
  );

export const GameCatalog = Suspense(
  lazy(() => import("@scenes/Catalog/game-catalog.scene"))
);
