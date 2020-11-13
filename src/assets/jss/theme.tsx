import { createMuiTheme } from '@material-ui/core/styles'
import { defaultBorderRadius, primaryColor } from './base'

/*
 * Only use this file to override MUI components globally
 * Prefer using classes to override a one off component
 */

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        fontSize: '1rem',
        textTransform: 'none',
        borderRadius: defaultBorderRadius,
      },
      label: {
        color: primaryColor,
      },
    },
  },
})

export default theme
