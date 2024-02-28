import { Outlet } from "react-router-dom";

export const HomeLayout = () => {
  return (
    <main style={{ height: "100vh" }}>
      <Outlet />
    </main>
  );
};
