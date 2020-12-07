export const getAuth = state => state.entities.auth;

export const getToken = state => state.entities.auth.token;

export const getAuthAuthenticateState = state => state.ui.authAuthenticateState;

export const getAuthRegisterState = state => state.ui.authRegisterState;