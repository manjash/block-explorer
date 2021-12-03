import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LastLocationProvider } from 'react-router-last-location'
import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from 'react-router-scroll-top'

import Layout from '../Layout/Layout'
import routes from '../../routes/routeSwitch'

const App = () => (
  <HelmetProvider>
    <Router>
      <LastLocationProvider>
        <ScrollToTop>
          <Layout routes={routes}>
            <Switch>
              {routes
                .filter(route => route.path !== undefined)
                .map(route => {
                  return (
                    <Route path={route.path} component={route.component} key={route.nameKey} />
                  )
                })}
            </Switch>
          </Layout>
        </ScrollToTop>
      </LastLocationProvider>
    </Router>
  </HelmetProvider>
)

export default App
