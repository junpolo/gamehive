import { useRoutes } from "react-router-dom";

import { GuestGuard } from "./guards/guest.guard";
import { authRoute, appRoute } from "./list.router";

export const BaseRouter = () => {
  const authRouter = authRoute[0];
  const appRouter = appRoute[0];

  const routers = useRoutes([
    {
      path: authRouter.path,
      element: <GuestGuard>{authRouter.element}</GuestGuard>,
      children: authRouter.children,
    },
    {
      path: appRouter.path,
      element: appRouter.element, // TODO: Put Guard
      children: appRouter.children,
    },
  ]);

  return routers;
};
