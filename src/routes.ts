import { FunctionComponent } from 'react'

import DashboardIcon from '@material-ui/icons/Dashboard'
import ExploreIcon from '@material-ui/icons/Explore'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'

import Dashboard from './views/Dashboard'
import Explorer from './views/Explorer'

export interface RouteValidator {
  icon: React.ElementType
  nameKey: string
  component?: FunctionComponent
  path?: string
  url?: string
}

export enum RoutePath {
  Dashboard = '/dashboard',
  Explorer = '/explorer',
}

const routes: RouteValidator[] = [
  {
    icon: DashboardIcon,
    path: RoutePath.Dashboard,
    nameKey: 'app.navigation.sidebar.dashboard',
    component: Dashboard,
  },
  {
    icon: ExploreIcon,
    path: RoutePath.Explorer,
    nameKey: 'app.navigation.sidebar.explorer',
    component: Explorer,
  },
  {
    icon: LibraryBooksIcon,
    nameKey: 'app.navigation.sidebar.docs',
    url: 'https://ironfish.network',
  },
]

export default routes
