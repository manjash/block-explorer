import { createStyles, Theme } from '@material-ui/core'

const dashboardStyle = (theme: Theme) =>
  createStyles({
    h6: {
      borderBottom: `1px solid ${theme.palette.primary.main}`,
      width: '65px',
      marginBottom: '15px',
      textAlign: 'center',
    },
    button: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  })

export default dashboardStyle
