import { FunctionComponent } from 'react'

import DashboardIcon from '@material-ui/icons/Dashboard'
import ExploreIcon from '@material-ui/icons/Explore'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import WidgetsIcon from '@material-ui/icons/Widgets'
import ReceiptIcon from '@material-ui/icons/Receipt'

import BlockDetailPage from '../container/BlockDetailPage/BlockDetailPage'
import TransactionDetailPage from '../container/TransactionDetailPage/TransactionDetailPage'
import Dashboard from '../container/Dashboard/Dashboard'
import Explorer from '../container/Explorer/Explorer'

import { RoutePath } from './routePath'

export interface RouteValidator {
  icon: React.ElementType
  nameKey: string
  isVisibleInSidebar: boolean
  component?: FunctionComponent
  path?: string
  url?: string
}

const routes: RouteValidator[] = [
  {
    icon: DashboardIcon,
    path: RoutePath.Dashboard,
    nameKey: 'app.navigation.dashboard',
    component: Dashboard,
    isVisibleInSidebar: true,
  },
  {
    icon: ExploreIcon,
    path: RoutePath.Explorer,
    nameKey: 'app.navigation.explorer',
    component: Explorer,
    isVisibleInSidebar: true,
  },
  {
    icon: WidgetsIcon,
    path: RoutePath.BlockDetailPage,
    nameKey: 'app.navigation.blocks',
    component: BlockDetailPage,
    isVisibleInSidebar: false,
  },
  {
    icon: ReceiptIcon,
    path: RoutePath.TransactionDetailPage,
    nameKey: 'app.navigation.transactions',
    component: TransactionDetailPage,
    isVisibleInSidebar: false,
  },
  {
    icon: LibraryBooksIcon,
    nameKey: 'app.navigation.docs',
    url: 'https://ironfish.network',
    isVisibleInSidebar: true,
  },
]

export default routes
