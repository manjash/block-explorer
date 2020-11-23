import { createStyles, fade, Theme } from '@material-ui/core'

const sidebarStyle = (theme: Theme) =>
  createStyles({
    logo: {
      maxWidth: '220px',
      margin: '0 auto',
    },
    drawer: {
      width: theme.sidebar.width,
      flexShrink: 0,
    },
    drawerPaper: {
      background: theme.sidebar.background,
      border: 'none',
      position: 'fixed',
      paddingTop: '54px',
      top: '0',
      bottom: '0',
      left: '0',
      zIndex: 1,
      boxShadow: theme.shadows[3],
      width: theme.sidebar.width,
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
      color: theme.palette.common.white,
      transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
      '&:hover,&:focus': {
        backgroundColor: fade(theme.palette.common.black, 0.25),
      },
    },
    itemActive: {
      borderLeft: `4px solid ${theme.palette.common.white}`,
    },
    itemLink: {
      width: 'auto',
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
