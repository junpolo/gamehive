import { useRoutes } from "react-router-dom";

import { homeRoute, appRoute } from "./list.router";

export const BaseRouter = () => {
  const homeRouter = homeRoute[0];
  const appRouter = appRoute[0];

  const routers = useRoutes([
    {
      path: homeRouter.path,
      element: homeRouter.element, // TODO: Put Guard
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
