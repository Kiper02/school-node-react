import LoginComponent from "./components/Auth/LoginComponent"
import RegistrationComponent from "./components/Auth/RegistrationComponent"
import AchievementsComponent from "./pages/AchievementsComponent"
import AdminComponent from "./pages/AdminComponent"
import MapComponent from "./pages/MapComponent"
import ProfileComponent from "./pages/ProfileComponent"
import TaskComponent from "./pages/TaskComponent"
import TasksComponent from "./pages/TasksComponent"
import TheoryComponent from "./pages/TheoryComponent"
import { ACHIEVEMENTS_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE, MAP_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE, TASK_ROUTE, TASKS_ROUTE, THEORY_ROUTE } from "./utils/consts"

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        element: <AdminComponent />
    },
    {
        path: ACHIEVEMENTS_ROUTE,
        element: <AchievementsComponent />
    },
    {
        path: MAP_ROUTE,
        element: <MapComponent />
    },
    {
        path: PROFILE_ROUTE,
        element: <ProfileComponent />
    },
    {
        path: TASK_ROUTE,
        element: <TaskComponent />
    },
    {
        path: TASKS_ROUTE, 
        element: <TasksComponent />
    },
    {
        path: THEORY_ROUTE,
        element: <TheoryComponent />
    },
]

export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        element: <RegistrationComponent />
    },
    {
        path: LOGIN_ROUTE,
        element: <LoginComponent />
    },
]