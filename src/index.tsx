import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'

import App from './container/App/App'
import reportWebVitals from './reportWebVitals'
import './i18n.ts'
import Loading from './components/Loading/Loading'
import themeIronFish from './assets/jss/theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeIronFish}>
      <CssBaseline />

      <Suspense fallback={<Loading />}>
        <App />
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
