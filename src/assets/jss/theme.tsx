import { createMuiTheme } from '@material-ui/core/styles'

/*
 * Only use this file to override MUI components globally
 * Prefer using classes to override a one off component
 */

const defaultBorderRadius = 16
const primaryColor = '#808191'
const secondaryColor = '#1B089A'
const errorColor = '#d2000078'

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    sidebar: {
      width: React.CSSProperties['width']
      background: React.CSSProperties['background']
    }
  }
  interface ThemeOptions {
    sidebar?: {
      width?: React.CSSProperties['width']
      background: React.CSSProperties['background']
    }
  }
}

declare module '@material-ui/core/styles/createPalette' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Palette {
    primaryBackground: Palette['primary']
    secondaryBackground: Palette['primary']
    borderColor: Palette['primary']
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface PaletteOptions {
    primaryBackground: PaletteOptions['primary']
    secondaryBackground: PaletteOptions['primary']
    borderColor: PaletteOptions['primary']
  }
}

const theme = createMuiTheme({
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
  sidebar: {
    width: 260,
    background: 'radial-gradient(circle, rgba(86,29,247,1) 0%, rgba(29,0,112,1) 100%)',
  },
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
    error: {
      main: errorColor,
    },
    primaryBackground: {
      main: '#eeeeee',
    },
    secondaryBackground: {
      main: '#F0A858',
    },
    borderColor: {
      main: '#E5E5E5',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        padding: '8px 64px 8px 64px',
        fontSize: '1rem',
        textTransform: 'none',
        borderRadius: defaultBorderRadius,
      },
      contained: {
        color: secondaryColor,
      },
      containedSecondary: {
        color: '#fff',
      },
    },
  },
})

export default theme
