import { drawerWidth, boxShadow, whiteColor, blackColorRGB } from '../../base'

import { createStyles } from '@material-ui/core'

const sidebarStyle = () =>
  createStyles({
    logo: {
      maxWidth: '220px',
      margin: '0 auto',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      background: '#1D0070',
      border: 'none',
      position: 'fixed',
      paddingTop: '54px',
      top: '0',
      bottom: '0',
      left: '0',
      zIndex: 1,
      ...boxShadow,
      width: drawerWidth,
      height: '100%',
    },
    list: {
      margin: '64px 0 0 0',
      padding: '0 0 0 2px',
      listStyle: 'none',
    },
    item: {
      position: 'relative',
      borderLeft: '4px solid transparent',
      display: 'block',
      textDecoration: 'none',
      color: whiteColor,
      '&:hover,&:focus': {
        backgroundColor: `rgba(${blackColorRGB}, 0.25)`,
      },
    },
    itemActive: {
      borderLeft: `4px solid ${whiteColor}`,
    },
    itemLink: {
      width: 'auto',
      transition: 'all 300ms linear',
      margin: '10px 15px 0',
      display: 'flex',
      padding: '10px 15px',
    },
    itemIcon: {
      width: '24px',
      height: '30px',
      marginRight: '15px',
    },
    itemText: {
      margin: '0',
      lineHeight: '30px',
      fontSize: '14px',
    },
  })

export default sidebarStyle
