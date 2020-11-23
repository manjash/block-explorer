import { createStyles, Theme } from '@material-ui/core'

export const tableCellStyle = (theme: Theme) =>
  createStyles({
    body: {
      paddingTop: 0,
      paddingBottom: 0,
      '& a': {
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.secondary.main,
        textDecoration: 'none',
      },
    },
  })

export const tableRowStyle = (theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
