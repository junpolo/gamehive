import {
  Grid,
  Card,
  CardContent,
  Stack,
  Box,
  Typography,
  useTheme,
} from "@mui/material";

export const OverallStats = () => {
  const theme = useTheme();

  return (
    <>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent component={Stack} gap={2} alignItems="center">
            <Box textAlign="center">
              <Typography variant="h4" fontWeight="bold">
                420k
              </Typography>
              <Typography>Weekly Sales</Typography>
            </Box>

            <Typography variant="body2">
              +4.20%{" "}
              <span style={{ color: theme.palette.text.secondary }}>
                than last week
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent component={Stack} gap={2} alignItems="center">
            <Box textAlign="center">
              <Typography variant="h4" fontWeight="bold">
                6.9m
              </Typography>
              <Typography>Active Users</Typography>
            </Box>

            <Typography variant="body2">
              +6.9%{" "}
              <span style={{ color: theme.palette.text.secondary }}>
                than last month
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card>
          <CardContent component={Stack} gap={2} alignItems="center">
            <Box textAlign="center">
              <Typography variant="h4" fontWeight="bold">
                322
              </Typography>
              <Typography>Bug Reports</Typography>
            </Box>

            <Typography variant="body2">
              -5%{" "}
              <span style={{ color: theme.palette.text.secondary }}>
                than last week
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};
