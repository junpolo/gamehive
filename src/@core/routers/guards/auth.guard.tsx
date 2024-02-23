import { useCookies } from "react-cookie";
import { Navigate, useLocation } from "react-router-dom";
import { PropsWithChildren, useState } from "react";

import { HOME_PATH } from "..";

export const AuthGuard: React.FC<PropsWithChildren> = ({ children }) => {
  const [cookies] = useCookies(["access_token"]);
  const { pathname } = useLocation();

  const isAuthenticated = cookies.access_token ? true : false;
  const [requestedPath, setRequestedPath] = useState<string | null>(null);

  if (!isAuthenticated) {
    if (pathname !== requestedPath) setRequestedPath(pathname);
    return <Navigate to={HOME_PATH.root} replace />;
  }

  if (requestedPath && pathname !== requestedPath) {
    setRequestedPath(null);
    return <Navigate to={requestedPath} />;
  }

  return <>{children}</>;
};
