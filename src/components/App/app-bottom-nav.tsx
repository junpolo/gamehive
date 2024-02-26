import * as React from "react";
import { Archive, Favorite, Restore } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Paper from "@mui/material/Paper";

export const AppNavBar = () => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef<HTMLDivElement>(null);

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
        <BottomNavigationAction label="Recents" icon={<Restore />} />
        <BottomNavigationAction label="Favorites" icon={<Favorite />} />
        <BottomNavigationAction label="Archive" icon={<Archive />} />
      </BottomNavigation>
    </Paper>
  );
};
