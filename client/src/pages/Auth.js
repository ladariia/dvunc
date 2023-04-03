import React, { useState, useContext } from 'react';
import { Context } from '../index';
import { Card, Container, Form, Button } from 'react-bootstrap';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { registration, login } from "../http/userAPI";
import { observer } from 'mobx-react-lite';
import { ADMIN_ROUTE } from '../utils/consts'

const Auth = observer(() => {
    const location = useLocation() //получить маршрут в строке запроса
    const isLogin = location.pathname === LOGIN_ROUTE
    const [user_login, setLogin] = useState('')
    const [user_password, setPassword] = useState('')
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const click = async () => {
        try {
            let userData
            if (isLogin) {
                userData = await login(user_login, user_password)
            } else {
                userData = await registration(user_login, user_password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(ADMIN_ROUTE)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{ height: window.innerHeight - 54 }}>
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Логин"
                        value={user_login}
                        onChange={e => setLogin(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Пароль"
                        value={user_password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <div className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div className="d-flex">
                                Нет аккаунта?&nbsp;<NavLink style={{ color: '#444AD2' }} to={REGISTRATION_ROUTE}>Зарегистрироваться</NavLink>
                            </div>
                            :
                            <div className="d-flex">
                                Есть аккаунт?&nbsp;<NavLink style={{ color: '#444AD2' }} to={LOGIN_ROUTE}>Войти</NavLink>
                            </div>
                        }
                        <Button onClick={click} variant={"dark"}>
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;