const { string, object } = require("yup");

export const name = string();
export const login = string().required("Campo obrigatório");
export const password = string().required("Campo obrigatório");;

export const loginSchema = object({
    login, password
})