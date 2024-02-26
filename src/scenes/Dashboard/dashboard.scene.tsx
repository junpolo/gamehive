import { FeatureGames, Leaderboard } from "@/components";
import {
  Card,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Outlet } from "react-router-dom";
import { Search } from "@mui/icons-material";

const DashboardScene = () => {
  const theme = useTheme();
  const isScreenLarge = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Grid
      container
      justifyContent={"center"}
      spacing={{ xs: 5, md: 10 }}
      p={5}
      pt={{ xs: 13 }}
    >
      <Grid item md={5} xs={12}>
        <Stack spacing={{ xs: 5, md: 10 }}>
          <FeatureGames />
          {/* <FeatureGames /> */}
        </Stack>
      </Grid>
      <Grid item md={3} xs={12}>
        <Leaderboard />
      </Grid>
    </Grid>
  );
};

export default DashboardScene;
