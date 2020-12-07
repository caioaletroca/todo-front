import { createReducer } from "@reduxjs/toolkit";
import { createStateReducer } from "saga-manager";

// Actions
import { userDataActions } from "core/actions";

export const userData = createReducer({}, {
    [userDataActions.get.data]: (state, { payload }) => payload.data,
    [userDataActions.put.data]: (state, { payload }) => payload.data,
    [userDataActions.clear]: () => ({})
});

export const userDataGetState = createStateReducer(userDataActions.get);
export const userDataPutState = createStateReducer(userDataActions.put);