// src/theme/muiTheme.js

import { createTheme } from "@mui/material/styles";

export const getMuiTheme = () => {
  const getVar = (name) =>
    getComputedStyle(document.documentElement)
      .getPropertyValue(`--${name}`)
      .trim() || "#000";

  return createTheme({
    palette: {
      mode:
        document.documentElement.getAttribute("data-theme") === "dark"
          ? "dark"
          : "light",
      primary: {
        main: getVar("color-primary"),
      },
      secondary: {
        main: getVar("color-secondary"),
      },
      background: {
        default: getVar("color-background"),
        paper: getVar("color-background"),
      },
      text: {
        primary: getVar("color-text"),
      },
    },
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            backgroundColor: getVar("color-primary"), // Define this CSS variable
            color: getVar("color-primary"),
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: getVar("color-sidebar-selected"),
              color: getVar("color-primary"),
            },
            "&:hover": {
              backgroundColor: getVar("color-sidebar-hover"),
            },
          },
        },
      },
    },
  });
};
