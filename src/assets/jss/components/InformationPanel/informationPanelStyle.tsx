import { createStyles, Theme } from '@material-ui/core'

const informationPanelStyle = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      padding: theme.spacing(2),
      flexDirection: 'row',
      flexWrap: 'wrap',
      boxShadow: theme.shadows[1],
      border: `1px solid ${theme.palette.borderColor?.main}`,
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0),
        border: 'none',
        flexDirection: 'column',
      },
    },
  })

export default informationPanelStyle
