import { createAction } from "@reduxjs/toolkit";
import { createAsyncAction } from "saga-manager";

export const todoActions = {
    get: createAsyncAction("TODO_GET"),
    post: createAsyncAction("TODO_POST"),
    put: createAsyncAction('TODO_PUT'),
    delete: createAsyncAction('TODO_DELETE'),
    clear: createAction("TODO_CLEAR"),
}