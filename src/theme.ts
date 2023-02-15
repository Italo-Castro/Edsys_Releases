import { yellow } from "@material-ui/core/colors";
import amber from "@material-ui/core/colors/amber";
import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";
import {
  createMuiTheme,
  // responsiveFontSizes  // TODO aplicar fontes responsívas e ver se fica bom
} from "@material-ui/core/styles";

// const drawerWidth = 256;

export const colors = {
  lightBlue: blue[300],
  blue: blue[500],
  darkBlue: blue[800],

  lightGrey: "#f5f5f5",
  grey: "#eaeff1",
  darkGrey: "#757575",

  lightRed: red[300],
  red: red[500],
  darkRed: red[800],

  green: green[500],
  lightGreen: green[300],

  darkYellow: yellow[800],
  yellow: yellow[600],
  lightYellow: yellow[300],

  amber: amber[500],
  white: "#fff",

  primary: blue[500],
  primaryDark: blue[800],
  primaryLight: blue[300],
  // main: pink[500],
  // mainDark: pink[800],
  // mainLight: pink[300],

  drawer: "#000",
  logo: "#000",
};

let theme = createMuiTheme({
  palette: {
    primary: {
      light: colors.primaryLight,
      main: colors.primary,
      dark: colors.primaryDark,
    },
  },
  typography: {
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  // shape: {
  //   borderRadius: 8,
  // },
  props: {
    MuiTab: {
      disableRipple: true,
    },
  },
  mixins: {
    toolbar: {
      minHeight: 48,
    },
  },
});

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: colors.drawer,
      },
    },
    MuiButton: {
      label: {
        textTransform: "none",
      },
      contained: {
        boxShadow: "none",
        "&:active": {
          boxShadow: "none",
        },
      },
    },
    MuiTabs: {
      root: {
        marginLeft: theme.spacing(1),
      },
      indicator: {
        height: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        backgroundColor: theme.palette.common.white,
      },
    },
    MuiTab: {
      root: {
        textTransform: "none",
        margin: "0 16px",
        minWidth: 0,
        padding: 0,
        [theme.breakpoints.up("md")]: {
          padding: 0,
          minWidth: 0,
        },
      },
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing(1),
      },
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4,
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: colors.darkGrey,
      },
    },
    MuiListItemText: {
      primary: {
        fontWeight: 50, //theme.typography.fontWeightMedium
      },
    },
    MuiListItemIcon: {
      root: {
        color: "inherit",
        marginRight: 0,
        "& svg": {
          fontSize: 20,
        },
      },
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32,
      },
    },
  },
};

export default theme;
