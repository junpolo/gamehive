import { Typography, useTheme } from "@mui/material";

export const Logo = () => {
  const theme = useTheme();

  return (
    <Typography
      variant="h5"
      fontWeight="bold"
      sx={{
        background: `linear-gradient(to right, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        width: "max-content",
      }}
    >
      GameHive
    </Typography>
  );
};
