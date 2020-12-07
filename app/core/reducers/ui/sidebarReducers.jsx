import { createReducer } from "@reduxjs/toolkit";
import { sidebarActions } from "core/actions";

export const sidebar = createReducer(false, {
    [sidebarActions.set]: (state, { payload }) => payload
})