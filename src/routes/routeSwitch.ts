import { FunctionComponent } from 'react'

import BlockDetailPage from '../container/BlockDetailPage/BlockDetailPage'
import TransactionDetailPage from '../container/TransactionDetailPage/TransactionDetailPage'
import Dashboard from '../container/Dashboard/Dashboard'
import Explorer from '../container/Explorer/Explorer'

import { RoutePath } from './routePath'

export interface RouteValidator {
  nameKey: string
  component?: FunctionComponent
  path?: string
}

const routes: RouteValidator[] = [
  {
    path: RoutePath.Explorer,
    nameKey: 'app.navigation.explorer',
    component: Explorer,
  },
  {
    path: RoutePath.BlockDetailPage,
    nameKey: 'app.navigation.blocks',
    component: BlockDetailPage,
  },
  {
    path: RoutePath.TransactionDetailPage,
    nameKey: 'app.navigation.transactions',
    component: TransactionDetailPage,
  },
  {
    path: RoutePath.Home,
    nameKey: 'app.navigation.dashboard',
    component: Dashboard,
  },
]

export default routes
