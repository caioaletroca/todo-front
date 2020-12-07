import React from "react";
import get from "lodash/get";

// Styles
import { default as MuiTextField } from "@material-ui/core/TextField";

export default function TextField({ name, errors, touched, ...others }) {
  return (
    <MuiTextField
      name={name}
      helperText={get(touched, name) ? get(errors, name) : ""}
      error={get(touched, name) && Boolean(get(errors, name))}
      {...others}
    />
  );
}
