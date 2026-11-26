"use client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#22d3ee", contrastText: "#07111e" },
    background: { default: "#0b1120", paper: "#172033" },
    text: { primary: "#f1f5f9", secondary: "#a9b8ce" },
    divider: "#334155",
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: { defaultProps: { disableElevation: true }, styleOverrides: { root: { textTransform: "none", minHeight: 46, fontWeight: 700 } } },
    MuiCard: { defaultProps: { variant: "outlined" }, styleOverrides: { root: { backgroundImage: "none", borderRadius: 12 } } },
    MuiChip: { styleOverrides: { root: { backgroundColor: "#202d44", color: "#22d3ee" } } },
  },
});

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}><CssBaseline />{children}</ThemeProvider>;
}
