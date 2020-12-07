import { createAction } from "@reduxjs/toolkit";
import { createAsyncAction } from "saga-manager";

export const userDataActions = {
    get: createAsyncAction("USER_DATA_GET"),
    put: createAsyncAction("USER_DATA_PUT"),
    clear: createAction('USER_DATA_CLEAR')
}