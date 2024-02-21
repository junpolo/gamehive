import { PropsWithChildren } from "react";

export const GuestGuard: React.FC<PropsWithChildren> = ({ children }) => {
  // TODO: Get cookies and navigation

  return <>{children}</>;
};
