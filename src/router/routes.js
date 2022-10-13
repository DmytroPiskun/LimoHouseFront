import Admin from "../pages/Admin"
import Homepage from "../pages/Homepage"

const routes = [
    {
        path: '/',
        name: 'Homepage',
        component: Homepage
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin
    }
]

export default routes