import { createMuiTheme } from '@material-ui/core/styles'

/*
 * Only use this file to override MUI components globally
 * Prefer using classes to override a one off component
 */

export const HEADER_HEIGHT = 92
export const HEADER_HEIGHT_SM = 153

const defaultBorderRadius = 2
const defaultBackground = '#fff'
const defaultBorderColor = '#DFE1E4'
const primaryColor = '#000'
const titleColor = '#1D0070'
const secondaryColor = '#6B6D76'
const errorColor = '#FBD5C9'
const defaultBoxShadow = '0px 1px 1px rgba(0, 0, 0, 0.07)'

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
    fontSize: 14,
    fontFamily: ['favorit-regular', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontFamily: ['extended-regular', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      color: titleColor,
    },
    h5: {
      fontFamily: ['extended-regular', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontSize: '20px',
      margin: '16px 0px 15px 0px',
    },
    h6: {
      fontFamily: ['extended-regular', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      fontSize: '14px',
    },
    subtitle1: {
      fontFamily: ['favorit-regular', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    },
    subtitle2: {
      fontSize: 14,
      fontFamily: ['favorit-regular', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      color: secondaryColor,
    },
  },
  sidebar: {
    width: 260,
    background: 'white',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 775,
      md: 960,
      lg: 1292,
      xl: 1920,
    },
  },
  shape: {
    borderRadius: defaultBorderRadius,
  },
  shadows: [
    'none',
    defaultBoxShadow,
    '0px 3px 3px rgba(0, 0, 0, 0.1)',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ],
  palette: {
    info: {
      main: titleColor,
    },
    text: {
      primary: primaryColor,
      secondary: '#000',
      disabled: '#3C75F6',
      hint: '#6B6F76',
    },
    background: {
      default: defaultBackground,
    },
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
      main: defaultBackground,
    },
    secondaryBackground: {
      main: '#F0A858',
    },
    borderColor: {
      main: defaultBorderColor,
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        color: secondaryColor,
        '&::placeholder': {
          textOverflow: 'ellipsis !important',
          color: 'blue !important',
          fontSize: 14,
        },
        '& inputTypeSearch': {
          opacity: 1,
          color: secondaryColor,
        },
        '& input': {
          opacity: 1,
          color: secondaryColor,
          '&::placeholder': {
            opacity: 1,
            color: secondaryColor,
          },
        },
      },
    },
    MuiButton: {
      root: {
        padding: '10px 12px 10px 12px',
        fontSize: '14px',
        textTransform: 'none',
        borderRadius: defaultBorderRadius,
      },
      contained: {
        backgroundColor: defaultBackground,
        border: `1px solid ${defaultBorderColor}`,
        boxShadow: defaultBoxShadow,
      },
      containedSecondary: {
        color: '#fff',
      },
      outlined: {
        backgroundColor: '#000',
        borderRadius: 90,
        color: '#fff',
        fontSize: '16px',
        fontFamily: ['extended-regular', 'Helvetica', 'Arial', 'sans-serif'].join(','),
        '&:hover': {
          backgroundColor: '#000',
        },
      },
    },
  },
})

export default theme
