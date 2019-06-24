import asyncComponent from './components/common/asyncComponent'
import { RouteConfig } from 'react-router-config'
const routes: RouteConfig[] = [
  {
    path: '/',
    component: asyncComponent(() => import('./containers/App')) as any,
    routes: [
      {
        path: '/home',
        component: asyncComponent(() => import('./containers/Home')) as any,
      }
    ]
  }
]
export default routes
