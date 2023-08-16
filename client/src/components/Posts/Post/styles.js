import { makeStyles } from "@material-ui/core/styles";

import {
  createTheme,
  withStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { green, purple, red } from "@material-ui/core/colors";
// import HUE from "@material-ui/core/colors/HUE";
import { Button } from "@material-ui/core";
const PurpleMain = purple["A400"];
const PurpleSec = purple["A700"];
const RedMain = red["A400"];
const RedSec = red["A700"];

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
});
export const PurpleButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: PurpleMain,
    "&:hover": {
      backgroundColor: PurpleSec,
    },
  },
}))(Button);
