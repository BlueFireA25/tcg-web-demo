import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    teal: Palette["primary"];
    purple: Palette["primary"];
  }
  interface PaletteOptions {
    teal?: PaletteOptions["primary"];
    purple?: PaletteOptions["primary"];
  }

  interface Theme {
    customColors: {
      primaryGradient: string;
      textGradientTitleBlue: string;
      textGradientTitleYellow: string;
      textGradientTitlePurple: string;
      textGradientTitleGreen: string;
    };
  }
  interface ThemeOptions {
    customColors?: {
      primaryGradient?: string;
      textGradientTitleBlue?: string;
      textGradientTitleYellow?: string;
      textGradientTitlePurple?: string;
      textGradientTitleGreen?: string;
    };
  }
}

// Declare others colors
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    teal: true;
    purple: true;
  }
}

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1440,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#2D65AB",
    },
    secondary: {
      main: "#FF7E00",
    },
    teal: {
      main: "#096772",
    },
    purple: {
      main: "#6A5ACD",
    },
    error: {
      main: "#f44336",
    },
    success: {
      main: "#4caf50",
    },
  },
  customColors: {
    primaryGradient:
      "linear-gradient(to bottom, rgba(0,162,255,1) 10%, rgba(45,101,171,1) 90%)",
    textGradientTitleBlue:
      "linear-gradient(108deg, #2D65AB 0%, #9400D3 98.96%)",
    textGradientTitleYellow:
      "linear-gradient(108deg, #2D65AB 0%, #FFD700 98.96%)",
    textGradientTitlePurple:
      "linear-gradient(108deg, #2D65AB 0%, #FF69B4 98.96%)",
    textGradientTitleGreen:
      "linear-gradient(108deg, #2D65AB 0%, #32cd32ff 98.96%)",
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
    h1: {
      fontFamily: "TWKLausanne, Arial, sans-serif",
      fontWeight: 800,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.04rem",
    },
    h2: {
      fontFamily: "TWKLausanne, Arial, sans-serif",
      fontWeight: 600,
      fontSize: "2.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.04rem",
    },
    h3: {
      fontFamily: "TWKLausanne, Arial, sans-serif",
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: 1.2,
      letterSpacing: "-0.04rem",
    },
    h4: {
      fontFamily: "TWKLausanne, Arial, sans-serif",
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: 1.2,
      letterSpacing: "-0.04rem",
    },
    h5: {
      fontFamily: "TWKLausanne, Arial, sans-serif",
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.2,
      letterSpacing: "-0.04rem",
    },
    h6: {
      fontFamily: "TWKLausanne, Arial, sans-serif",
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: 1.2,
      letterSpacing: "-0.04rem",
    },
    body1: {
      fontFamily: "Inter, Arial, sans-serif",
      fontWeight: 400,
      fontSize: "1.25rem",
      lineHeight: 1.2,
      letterSpacing: "-.04rem",
    },
    body2: {
      fontFamily: "Inter, Arial, sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.2,
      letterSpacing: "-.04rem",
    },
    subtitle1: {
      fontFamily: "Inter, Arial, sans-serif",
      fontWeight: 400,
      fontSize: "1.125rem",
      lineHeight: 1.2,
      letterSpacing: "-.04rem",
    },
    subtitle2: {
      fontFamily: "Inter, Arial, sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.2,
      letterSpacing: "-.04rem",
    },
    button: {
      fontFamily: "TWKLausanne, Arial, sans-serif",
      fontWeight: 600,
      fontSize: "1.125rem",
      textTransform: "none",
      textAlign: "center",
    },
  },
});

theme = createTheme(theme, {
  typography: {
    body1: {
      [theme.breakpoints.down("sm")]: {
        fontSize: "1.125rem",
      },
    },
  },
});

export default theme;
