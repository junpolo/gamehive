import { useRoutes } from "react-router-dom";

import { GuestGuard } from "./guards/guest.guard";
import { homeRoute, appRoute } from "./list.router";

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
      element: appRouter.element, // TODO: Put Guard
      children: appRouter.children,
    },
  ]);

  return routers;
};
