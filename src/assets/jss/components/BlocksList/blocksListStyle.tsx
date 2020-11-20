import { createStyles, Theme } from '@material-ui/core'

export const tableCellStyle = () =>
  createStyles({
    body: {
      paddingTop: 0,
      paddingBottom: 0,
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
