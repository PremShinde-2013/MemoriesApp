// import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./styles";
import {
  createTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { green, purple, red } from "@material-ui/core/colors";
// import HUE from "@material-ui/core/colors/HUE";

const PurpleMain = purple["A400"];
const PurpleSec = purple["A700"];
const RedMain = red["A400"];
const RedSec = red["A700"];
export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));
export const PurpleButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: PurpleMain,
    "&:hover": {
      backgroundColor: PurpleSec,
    },
  },
}))(Button);
export const RedButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: RedMain,
    "&:hover": {
      backgroundColor: RedSec,
    },
  },
}))(Button);
