import { createTheme } from "@mui/material/styles";

const getCssVariable = (variable) =>
  getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: getCssVariable("--color-blue"),
    },

    background: {
      default: getCssVariable("--color-background-light"),
    },
  },
  typography: {
    h1: {
      color: getCssVariable("--color-paper"),
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: getCssVariable("--color-success"),
    },

    background: {
      default: getCssVariable("--color-background-dark"),
      paper: getCssVariable("--color-paper"),
    },
  },
  typography: {
    h1: {
      color: getCssVariable("--color-light"),
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: getCssVariable("--color-light"),
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: getCssVariable("--color-success"),
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: getCssVariable("--color-border"),
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: getCssVariable("--color-success"),
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: getCssVariable("--color-light"),
          "&.Mui-focused": {
            color: getCssVariable("--color-success"),
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
        },
      },
    },
  },
});
