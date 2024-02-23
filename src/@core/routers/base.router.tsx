import { useRoutes } from "react-router-dom";

import { homeRoute, appRoute } from "./list.router";
import { GuestGuard, AuthGuard } from "./guards";

export const BaseRouter = () => {
  const homeRouter = homeRoute[0];
  const appRouter = appRoute[0];

  const routers = useRoutes([
    {
      path: homeRouter.path,
      element: <GuestGuard>{homeRouter.element}</GuestGuard>,
      children: homeRouter.children,
    },
    {
      path: appRouter.path,
      element: <AuthGuard>{appRouter.element}</AuthGuard>,
      children: appRouter.children,
    },
  ]);

  return routers;
};
