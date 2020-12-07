import { createReducer } from "@reduxjs/toolkit";
import { authActions } from "core/actions";

const initialState = {
    token: '',
    logged: false
}

export const auth = createReducer(initialState, {
    [authActions.authenticate.data]: (state, { payload }) => {
        
    }
})