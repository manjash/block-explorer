import { createStyles, Theme } from '@material-ui/core'

const informationPanelStyle = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
  })

export default informationPanelStyle
