import { createStyles, Theme } from '@material-ui/core'

const transactionDetailPageStyle = (theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
    },
    blocks: {
      width: '49%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginBottom: theme.spacing(2),
      },
    },
    warningContainer: {
      maxWidth: '990px',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: theme.spacing(4),
      '& > div': { lineHeight: '160%' },
    },
  })

export default transactionDetailPageStyle
