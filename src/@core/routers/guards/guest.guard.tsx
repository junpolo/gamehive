import { PropsWithChildren } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

import { APP_PATH } from "..";

export const GuestGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const [cookies] = useCookies(["access_token"]);

  const isAuthenticated = cookies.access_token ? true : false;

  if (isAuthenticated) return <Navigate to={APP_PATH.root} replace />;

  return <>{children}</>;
};
