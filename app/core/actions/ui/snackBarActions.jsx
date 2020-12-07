import React from "react";
import { createAction } from "@reduxjs/toolkit";

// Store
import store from "core/store";

// Styles
import IconButton from "@material-ui/core/IconButton";

export const snackBarActions = {
  add: createAction("ENQUEUE_SNACKBAR", (props) => {
    // Defines a custom key
    const key = props.options && props.options.key;

    return {
      payload: {
        ...props,
        key: key || new Date().getTime() + Math.random(),
        options: {
          ...props.options,
          action: (key) => (
            <IconButton
              onClick={() => store.dispatch(snackBarActions.close({ key }))}>
              <i className="fas fa-times" style={{ color: "white" }} />
            </IconButton>
          ),
        },
      },
    };
  }),
  close: createAction("CLOSE_SNACKBAR"),
  remove: createAction("REMOVE_SNACKBAR"),
  clear: createAction("CLEAR_SNACKBAR"),
};