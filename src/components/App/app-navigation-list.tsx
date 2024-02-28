import { ManageSearch, Home, Leaderboard } from "@mui/icons-material";

export interface AppNavigationItem {
  name: string;
  icon: JSX.Element;
  navigateTo?: string;
}

export const appNavigationList: AppNavigationItem[] = [
  {
    name: "Dashboard",
    icon: <Home />,
    navigateTo: "/app/dashboard",
  },
  {
    name: "Analytics",
    icon: <Leaderboard />,
    navigateTo: "/app/analytics",
  },
  {
    name: "Profile",
    icon: <ManageSearch />,
    navigateTo: "/app/profile",
  },
];
