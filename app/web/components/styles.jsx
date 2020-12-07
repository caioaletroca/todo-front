import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1A2542",
    },
    secondary: {
      main: red[600],
    },
  },
});

export default theme;