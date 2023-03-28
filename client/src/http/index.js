import axios from 'axios';

const $host = axios.create({
    baseURL: 'http://localhost:5001/'
})

const $authHost = axios.create({
    baseURL: 'http://localhost:5001/'
})

//для 2 необходимо автоматически подставлять токен каждому запросу
//для этого существую интерцепторы - фия, кя параметром принимает конфиг
const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor) //будет отрабатывать перед каждым запросом и подставлять токен в хэдер авторизэйшен

export {
    $host,
    $authHost
}