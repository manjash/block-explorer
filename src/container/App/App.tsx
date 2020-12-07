import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from 'react-router-scroll-top'

import Layout from '../Layout/Layout'
import routes from '../../routes/routeSwitch'

const App = () => (
  <HelmetProvider>
    <Router>
      <ScrollToTop>
        <Layout routes={routes}>
          <Switch>
            {routes
              .filter((route) => route.path !== undefined)
              .map((route) => {
                return (
                  <Route path={route.path} component={route.component} key={route.nameKey} />
                )
              })}
            <Redirect from='/' to='dashboard' />
          </Switch>
        </Layout>
      </ScrollToTop>
    </Router>
  </HelmetProvider>
)

export default App
