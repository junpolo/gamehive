import { ThemeProvider, CssBaseline } from "@mui/material";

import { BaseRouter } from "@core/routers";
import { useCreateTheme } from "@core/hooks";

import "./App.scss";

function App() {
  const theme = useCreateTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BaseRouter />
    </ThemeProvider>
  );
}

export default App;
