import Admin from "../pages/Admin"
import Homepage from "../pages/Homepage"
import Reserve from "../pages/Reserve"

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
    },
    {
        path: '/reserve',
        name: 'reserve',
        component: Reserve
    }
]

export default routes