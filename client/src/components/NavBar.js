import React, { useContext } from 'react';
import { Context } from '../index'
import Container from 'react-bootstrap/Container';
import { NavLink, useNavigate } from 'react-router-dom';
import { COURSES_ROUTE, LOGIN_ROUTE, ADMIN_ROUTE } from '../utils/consts';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

//observer-для перерендера в режиме реального времени, чтобы mobx мог отслеживать изменения занчений в состоянии
const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        navigate(COURSES_ROUTE)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white', textDecoration: 'none' }} to={COURSES_ROUTE}>ДВУНЦ</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Админ</Button>
                        <Button style={{ marginLeft: 4 }} variant={"outline-light"} onClick={() => logOut()}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button>
                    </Nav>
                }
            </Container>
        </Navbar >
    );
});

export default NavBar;