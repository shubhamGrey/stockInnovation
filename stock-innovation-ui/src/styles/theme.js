import { alpha, createTheme, getContrastRatio } from "@mui/material";
import "@fontsource/roboto";
import "@fontsource/open-sans";

const violetBase = "#7F00FF";
const violetMain = alpha(violetBase, 0.7);

export const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Open Sans"].join(","),
    h1: {},
    h2: {
      fontFamily: "Open Sans",
      fontWeight: "400",
      fontSize: "48px",
      lineHeight: "56.02px",
      letterSpacing: "0.8px",
    },
    h3: {
      fontFamily: "Open Sans",
      fontWeight: "800",
      fontSize: "24px",
      lineHeight: "32.68px",
      letterSpacing: "0.8px",
    },
    h4: {
      fontFamily: "Open Sans",
      fontWeight: "400",
      fontSize: "34px",
      lineHeight: "41.99px",
      letterSpacing: ".25px",
    },
    h5: {
      fontFamily: "Open Sans",
      fontWeight: "400",
      fontSize: "24px",
      lineHeight: "32.02px",
    },
    h6: {
      fontFamily: "Open Sans",
      fontWeight: "600",
      fontSize: "20px",
      lineHeight: "32px",
      letterSpacing: ".15px",
    },
    body1: {
      fontFamily: "Open Sans",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: ".15px",
    },
    subtitle1: {
      fontFamily: "Open Sans",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "28px",
      letterSpacing: ".15px",
    },
    subtitle2: {
      fontFamily: "Open Sans",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: ".17px",
    },
    button: {
      fontFamily: "Open Sans",
      fontWeight: "600",
      fontSize: "13px",
      lineHeight: "22px",
      letterSpacing: ".46px",
    },
    button1: {
      fontFamily: "Open Sans",
      fontWeight: "600",
      fontSize: "14px",
      lineHeight: "24px",
      letterSpacing: ".4px",
    },
    button2: {
      fontFamily: "Open Sans",
      fontWeight: "600",
      fontSize: "15px",
      lineHeight: "26px",
      letterSpacing: ".46px",
    },
    body2: {
      fontFamily: "Open Sans",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "20px",
      letterSpacing: "0.17000000178813934px",
    },
    alert_title: {
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "24px",
      letterSpacing: "0.15px",
    },
    caption: {
      fontSize: "12px",
      fontFamily: "Open Sans",
      fontWeight: "400",
      lineHeight: "19.92px",
    },
    helper_text: {
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "20px",
      letterSpacing: "0.4px",
    },
  },
  palette: {
    primary: {
      main: "#b4bac1",
    },
    violet: {
      main: violetMain,
      dark: alpha(violetBase, 0.9),
      contrastText:
        getContrastRatio(violetMain, "#fff") > 4.5 ? "#fff" : "#111",
    },
  },

  components: {
    // Name of the component
    MuiTab: {
      styleOverrides: {
        // Name of the slot
      },
    },
    MuiInputBase: {
      styleOverrides: {
        // root: {
        //   height: "40px",
        // },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#0E336A",
          color: "#fff", // set the font color of the tooltip
          fontFamily: "Open Sans", // set the font family of the tooltip
          fontSize: "10px", // set the font size of the tooltip
          fontWeight: "600",
          lineHeight: "14px",
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the new variant to render a <h1> by default
          alert_title: "div",
          helper_text: "div",
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1280,
      lg: 1700,
      xl: 1920,
    },
  },
});
