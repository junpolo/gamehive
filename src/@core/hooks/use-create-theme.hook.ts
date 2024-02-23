import { useMemo } from "react";
import { createTheme, responsiveFontSizes } from "@mui/material";

import {
  lightThemePalette,
  darkThemePalette,
  componentsConfig,
  fontConfig,
} from "@core/theme";

type ColorModes = "light" | "dark";

export const useCreateTheme = () => {
  const COLOR_MODE = "dark" as ColorModes;

  const paletteOptions =
    COLOR_MODE === "light" ? lightThemePalette : darkThemePalette;

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          ...fontConfig,
        },
        palette: {
          mode: COLOR_MODE,
          ...paletteOptions,
        },
        components: componentsConfig,
      }),
    [paletteOptions]
  );

  return responsiveFontSizes(theme);
};
