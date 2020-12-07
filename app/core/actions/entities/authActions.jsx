import { createAction } from "@reduxjs/toolkit";
import { createAsyncAction } from "saga-manager";

export const authActions = {
    authenticate: createAsyncAction('AUTH_AUTHENTICATE'),
    logout: createAction('AUTH_LOGOUT'),
    register: createAsyncAction('AUTH_REGISTER'),
}