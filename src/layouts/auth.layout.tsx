import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <main>
      <h1>Auth Layout</h1>
      <Outlet />
    </main>
  );
};
