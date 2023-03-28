import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import CoursePage from "./pages/CoursePage"
import Courses from "./pages/Courses"
import { ADMIN_ROUTE, COURSES_ROUTE, COURSE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./utils/consts"

//описание всех маршуртов к страницам
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: COURSES_ROUTE,
        Component: Courses
    },
    {
        path: COURSE_ROUTE + '/:course_id',
        Component: CoursePage
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth,
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    }
]