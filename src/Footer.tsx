import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem",
    borderRadius: 0,
    position: "absolute",
    bottom: 0,
    width: "100%",
    background: "#8D9560",
    color: "white",
  },
}));

const Footer: React.FunctionComponent = () => {
  const classes = useStyles();

  return <Paper className={classes.root}>copyright by Lois och Betina</Paper>;
};

export default Footer;
