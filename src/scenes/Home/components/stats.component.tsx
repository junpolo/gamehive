import { Box, Stack, Typography, useTheme } from "@mui/material";

export const StatsComponent = () => {
  const theme = useTheme();
  const textSecondary = theme.palette.text.secondary;

  return (
    <Stack direction="row" spacing={10}>
      <Box>
        <Typography variant="h4" fontWeight="bold">
          50k+
        </Typography>
        <Typography variant="body2" color={textSecondary}>
          Games
        </Typography>
      </Box>

      <Box>
        <Typography variant="h4" fontWeight="bold">
          3m+
        </Typography>
        <Typography variant="body2" color={textSecondary}>
          Active Users
        </Typography>
      </Box>

      <Box>
        <Typography variant="h4" fontWeight="bold">
          3k
        </Typography>
        <Typography variant="body2" color={textSecondary}>
          Daily Active Games
        </Typography>
      </Box>
    </Stack>
  );
};
