//ф-ии регистрации, авторизации и  проверки токена на валидность
import { $host, $authHost } from './index';
import jwt_decode from "jwt-decode";

export const registration = async (user_login, user_password) => {
    const { data } = await $host.post('api/user/registration', { user_login, user_password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (user_login, user_password) => {
    const { data } = await $host.post('api/user/login', { user_login, user_password })
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

//вызов при обнов страницы (проверка токена)
export const check = async () => {
    const { data } = await $authHost.get('api/user/auth',)
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}