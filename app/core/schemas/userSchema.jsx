import { string, object } from "yup";

import { onlyLetters, oneUpperLetter, oneLowerLetter, oneNumber } from 'core/utils';

export const name = string()
    .trim()
    .max(100, "O campo deve conter menos de 100 caracteres")
    .matches(
        onlyLetters,
        "O campo não pode conter caracteres especiais ou números"
    )
    .required("Campo obrigatório");
export const login = string()
    .trim()
    .max(100, "O campo deve conter menos de 100 caracteres")
    .required("Campo obrigatório");
export const password = string()
    .trim()
    .min(8, "A senha deve conter no mínimo 8 caracteres")
    .max(100, "O campo deve conter menos de 100 caracteres")
    .matches(
        oneUpperLetter,
        "A senha precisa conter pelo menos uma letra maiúscula"
    )
    .matches(
        oneLowerLetter,
        "A senha precisa conter pelo menos uma letra minúscula"
    )
    .matches(oneNumber, "A senha precisa conter pelo menos um número")
    .required("Campo obrigatório");

export const loginSchema = object({
    login, password
})

export const registerSchema = object({
    name, login, password
})

export const configurationSchema = object({
    name
})