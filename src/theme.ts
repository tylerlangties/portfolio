import { createTheme } from "@mui/material/styles";
import type { ElementType } from "react";
import LinkBehavior from "@/components/LinkBehavior";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#22d3ee",
      light: "#67e8f9",
      dark: "#06b6d4",
    },
    secondary: {
      main: "#a78bfa",
      light: "#c4b5fd",
      dark: "#7c3aed",
    },
    background: {
      default: "#0a0a0f",
      paper: "#13131a",
    },
    text: {
      primary: "#fafafa",
      secondary: "rgba(250, 250, 250, 0.7)",
      disabled: "rgba(250, 250, 250, 0.4)",
    },
    divider: "rgba(250, 250, 250, 0.08)",
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif',
    h1: { fontWeight: 800, letterSpacing: "-0.03em" },
    h2: { fontWeight: 800, letterSpacing: "-0.02em" },
    h3: { fontWeight: 700, letterSpacing: "-0.02em" },
    h4: { fontWeight: 700, letterSpacing: "-0.01em" },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior as ElementType,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior as ElementType,
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 10,
        },
        contained: {
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 0 0 1px rgba(34, 211, 238, 0.3)",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: "1px solid rgba(250, 250, 250, 0.06)",
          borderRadius: 16,
          "&:hover": {
            borderColor: "rgba(250, 250, 250, 0.1)",
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          borderRadius: 8,
          border: "1px solid rgba(250, 250, 250, 0.1)",
          background: "rgba(250, 250, 250, 0.04)",
        },
      },
    },
  },
});
