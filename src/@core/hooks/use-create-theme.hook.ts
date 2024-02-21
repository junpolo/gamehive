import {
  lightThemePalette,
  darkThemePalette,
  componentsConfig,
} from "@core/theme";
import { createTheme } from "@mui/material";
import { useMemo } from "react";

type ColorModes = "light" | "dark";

export const useCreateTheme = () => {
  const COLOR_MODE: ColorModes = "light";

  const paletteOptions =
    COLOR_MODE === "light" ? lightThemePalette : darkThemePalette;

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: COLOR_MODE,
          ...paletteOptions,
        },
        components: componentsConfig,
      }),
    [paletteOptions]
  );

  return theme;
};
