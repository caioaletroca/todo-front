import { createAsyncAction } from "saga-manager";

export const authActions = {
    authenticate: createAsyncAction('AUTHENTICATE'),
}