import { defaultFont, defaultPrimaryBackgroundColor } from '../base'

import { createStyles, Theme } from '@material-ui/core'

const sidebarStyle = (theme: Theme) =>
  createStyles({
    wrapper: {
      ...defaultFont,
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      backgroundColor: defaultPrimaryBackgroundColor,
      padding: theme.spacing(5),
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
        paddingBottom: '80px',
      },
    },
  })

export default sidebarStyle
