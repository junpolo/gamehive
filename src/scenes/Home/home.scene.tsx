import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import { StatsComponent } from "./components";

const HomeScene = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Grid
      container
      height="100%"
      sx={{
        ...(isLargeScreen
          ? {
              background: `linear-gradient(to right, ${theme.palette.background.default}  0%, 70%, transparent 90%), url(https://images5.alphacoders.com/133/1330658.jpeg)`,
              backgroundSize: "cover",
              backgroundPosition: "top",
            }
          : {
              background: `linear-gradient(to top right, ${theme.palette.secondary.main} 0%, 1%, ${theme.palette.background.default} 78% 100%)`,
            }),
      }}
    >
      <Stack
        component={Grid}
        item
        md={7}
        xs={12}
        gap={8}
        justifyContent="center"
        padding={7}
      >
        <Box>
          <Typography
            variant="h1"
            fontWeight="bold"
            lineHeight="0.875"
            maxWidth={theme.breakpoints.values.md}
            style={{
              background: `linear-gradient(to right, ${theme.palette.text.primary} 0% 10%, ${theme.palette.primary.dark} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Where Reality Ends
          </Typography>
          <Typography color={theme.palette.text.secondary} marginTop={2}>
            Explore, Play, Conquer: Our Gaming Collection Awaits
          </Typography>
        </Box>

        <Box display="flex" gap={5}>
          <Button
            variant="contained"
            size="large"
            sx={{
              width: "max-content",
              textTransform: "capitalize",
              background: `linear-gradient(to right, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
            }}
          >
            Explore The Hive
          </Button>
        </Box>

        <StatsComponent />
      </Stack>
    </Grid>
  );
};

export default HomeScene;
