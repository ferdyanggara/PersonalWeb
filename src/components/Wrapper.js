import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    marginLeft: "1vw",
    marginTop: "2vh",
    marginBottom: "2vh",
    flexWrap: "wrap",
  },
});

const Wrapper = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

export default Wrapper;
