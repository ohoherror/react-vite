export interface routeType {
    path?: string
    component?: any
    children?: Array<routeType>
    meta?: {
        title?: string
        needLogin?: boolean
    }
    redirect?: string
}

const routes: Array<routeType> = [
    {
        path: '/',
        component: () => import('../pages/Home'),
    },
    {
        path: '/about',
        component: () => import('../pages/About'),
    },
    {
        path: '/article',
        component: () => import('../pages/Article'),
    }
]

export default routes;