import { Components } from "@mui/material";

export const componentsConfig: Components = {
  MuiTableRow: {
    styleOverrides: {
      root: {
        ":last-child td": {
          border: "none",
        },
      },
    },
  },
  MuiTableCell: {
    styleOverrides: {
      head: {
        ":first-of-type": {
          paddingLeft: 0,
        },
        ":last-of-type": {
          paddingRight: 0,
        },
      },
      body: {
        ":first-of-type": {
          paddingLeft: 0,
        },
        ":last-of-type": {
          paddingRight: 0,
        },
      },
    },
  },
};
