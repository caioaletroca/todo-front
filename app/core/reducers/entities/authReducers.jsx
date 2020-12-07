import { createReducer } from "@reduxjs/toolkit";
import { authActions } from "core/actions";
import { createStateReducer } from "saga-manager";

const initialState = {
    token: '',
    logged: false
}

export const auth = createReducer(initialState, {
    [authActions.authenticate.data]: (state, { payload }) => {
        return {
            token: payload.data.access_token,
            logged: true
        }
    },
    [authActions.logout]: () => initialState
})

export const authAuthenticateState = createStateReducer(authActions.authenticate);
export const authRegisterState = createStateReducer(authActions.register);