import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem",
    borderRadius: 0,
    background: "#FF730E",
    color: "white",
  },
}));

const Header: React.FunctionComponent = () => {
  const classes = useStyles();

  return <Paper className={classes.root}>EN VILD NATT</Paper>;
};

export default Header;
