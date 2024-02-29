import * as React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useNavigate } from "react-router";

import { appNavigationList } from "./app-navigation-list";

export const AppNavBar = () => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    (ref.current as HTMLDivElement).ownerDocument.body.scrollTop = 0;
  }, [value]);

  return (
    <Paper
      sx={{
        display: {
          xs: "block",

          sm: "none",
        },
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1,
      }}
      ref={ref}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
      >
        {appNavigationList.map((item, index) => (
          <BottomNavigationAction
            key={index}
            value={item.name}
            icon={item.icon}
            onClick={() => navigate(`${item.navigateTo}`)}
            sx={{
              minWidth: "auto",
              maxWidth: "100%",
              "&:focus": { outline: "none" },
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
};
