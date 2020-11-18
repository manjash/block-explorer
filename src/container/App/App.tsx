import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Layout from '../Layout/Layout'
import routes from '../../routes'

const App = () => (
  <Router>
    <Layout routes={routes}>
      <Switch>
        {routes
          .filter((route) => route.path !== undefined)
          .map((route) => {
            return <Route path={route.path} component={route.component} key={route.nameKey} />
          })}
        <Redirect from='/' to='dashboard' />
      </Switch>
    </Layout>
  </Router>
)

export default App
