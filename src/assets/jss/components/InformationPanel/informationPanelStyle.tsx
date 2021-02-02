import { createStyles, Theme } from '@material-ui/core'

const informationPanelStyle = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      padding: theme.spacing(2),
      flexDirection: 'row',
      flexWrap: 'wrap',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
      border: `1px solid ${theme.palette.borderColor.main}`,
    },
  })

export default informationPanelStyle
