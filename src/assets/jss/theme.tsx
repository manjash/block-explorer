import { createMuiTheme } from '@material-ui/core/styles'

/*
 * Only use this file to override MUI components globally
 * Prefer using classes to override a one off component
 */
const defaultBorderRadius = 16
const primaryColor = '#808191'
const secondaryColor = '#1B089A'

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 775,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  shape: {
    borderRadius: defaultBorderRadius,
  },
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        fontSize: '1rem',
        textTransform: 'none',
        borderRadius: defaultBorderRadius,
      },
      label: {
        color: secondaryColor,
      },
    },
  },
})

export default theme
