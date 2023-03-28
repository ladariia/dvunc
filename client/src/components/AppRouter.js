//логика навигации по страницам
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { COURSES_ROUTE } from '../utils/consts';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
    const { user } = useContext(Context); //показывает авторизован пользователь или нет -  в дальнейшем будем хранить это в локал стор, отправлять токен на сервер, убеждаться в том что он валидный, и затем переменную присваивать
    return (
        <Routes>
            {/* если не один из роутсов не отрабатывает - отрабатывает последний */}
            {/* импорт массива с роутами */}
            {user.isAuth && authRoutes.map(({ path, Component }) =>
                /* для каждого эл-та массива отрисовываем роут */
                /* exact = путь должен точно совпадать */
                <Route key={path} path={path} element={<Component />} exact />
            )}
            {publicRoutes.map(({ path, Component }) =>
                /* для каждого эл-та массива отрисовываем роут */
                /* exact = путь должен точно совпадать */
                <Route key={path} path={path} element={<Component />} exact />
            )}
            <Route path="*" element={<Navigate to={COURSES_ROUTE} replace />} />
        </Routes>
    );
});

export default AppRouter;