import React from "react";

// Styles
import { makeStyles } from "@material-ui/core/styles";
import { default as MuiButton } from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(() => ({
  buttonProgress: {
    // color: "white",
    height: "20px !important",
    width: "20px !important",
  },
}));

export default function Button({
  loading,
  disabled,
  children,
  ...others
}) {
  const classes = useStyles();
  // loading = true;
  return (
    <MuiButton {...others} disabled={loading || disabled}>
      {loading ? (
        <CircularProgress className={classes.buttonProgress} />
      ) : (
        children
      )}
    </MuiButton>
  );
}