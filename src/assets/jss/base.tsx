/*
 * Only use this file to declare global variables used accross the codebase
 */

// Colors
const defaultPrimaryBackgroundColor = '#eeeeee'
const defaultSecondaryBackgroundColor = '#fff'
const defaultBorderColor = '#E5E5E5'
const blackColor = '#000'
const blackColorRGB = '0,0,0'
const whiteColor = '#FFF'
const whiteColorRGB = '255,255,255'

const backgroundNavigationColor =
  'radial-gradient(circle, rgba(86,29,247,1) 0%, rgba(29,0,112,1) 100%)'

// Layout
const drawerWidth = 260
const transition = {
  transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
}
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 300,
  lineHeight: '1.5em',
}

const boxShadow = {
  boxShadow: `0 10px 30px -12px rgba(${blackColorRGB}, 0.22), 0 4px 25px 0px rgba(${blackColorRGB}, 0.08), 0 8px 10px -5px rgba(${blackColorRGB}, 0.1)`,
}

export {
  backgroundNavigationColor,
  blackColor,
  blackColorRGB,
  boxShadow,
  defaultBorderColor,
  defaultFont,
  defaultPrimaryBackgroundColor,
  defaultSecondaryBackgroundColor,
  drawerWidth,
  transition,
  whiteColorRGB,
  whiteColor,
}
