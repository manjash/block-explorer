import { createStyles, Theme } from '@material-ui/core'

const containerWidthSmallBreakpoint = '210px'

const adStyle = (theme: Theme) =>
  createStyles({
    root: {
      borderTop: `1px solid ${theme.palette.borderColor.main}`,
      paddingTop: '70px',
      color: theme.palette.info.main,
      fontFamily: ['extended-regular', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      [theme.breakpoints.down('sm')]: {
        paddingTop: '64px',
      },
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: '50px',
      [theme.breakpoints.down('sm')]: {
        paddingBottom: '64px',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    about: {
      width: '240px',
      fontSize: '11px',
      lineHeight: '16px',
      [theme.breakpoints.down('sm')]: {
        width: containerWidthSmallBreakpoint,
      },
    },
    toolbar: {
      padding: 0,
    },
    links: {
      display: 'flex',
      width: '165px',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    contact: {
      paddingTop: '7px',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      borderTop: `1px solid ${theme.palette.borderColor.main}`,
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
        flexDirection: 'column',
      },
    },
    button: {
      display: 'flex',
      height: '40px',
      width: '157px',
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(1),
        width: containerWidthSmallBreakpoint,
      },
    },
    linksBlock: {
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(1.5, 0, 1.5, 0),
        width: containerWidthSmallBreakpoint,
      },
      '& p': {
        padding: 0,
        ...theme.typography.h5,
        margin: 0,
        fontWeight: 500,
      },
      '& ul': {
        padding: 0,
      },
      '& li': {
        listStyle: 'none',
        marginBottom: '8px',
      },
      '& a': {
        textDecoration: 'none',
        fontSize: '16px',
        color: theme.palette.info.main,
      },
    },
  })

export default adStyle
