import { createReducer } from "@reduxjs/toolkit";

// Actions
import { snackBarActions } from "core/actions";

export const snackBar = createReducer(
  {},
  {
    [snackBarActions.add]: (state, action) => {
      state[action.payload.key] = action.payload;
    },
    [snackBarActions.close]: (state, action) => {
      state[action.payload.key].dismissed = true;
    },
    [snackBarActions.remove]: (state, action) => {
      delete state[action.payload.key];
    },
    [snackBarActions.clear]: () => {
      return {};
    },
  }
);