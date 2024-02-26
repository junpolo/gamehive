import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <main style={{ height: "inherit" }}>
      <Suspense>
        <Outlet />
      </Suspense>
    </main>
  );
};
