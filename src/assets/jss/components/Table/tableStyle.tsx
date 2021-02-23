import { createStyles, Theme } from '@material-ui/core'

export const tableCellStyle = (theme: Theme) =>
  createStyles({
    root: {
      whiteSpace: 'nowrap',
      height: '47px',
      color: theme.palette.text.secondary,
      '&.MuiTableCell-head': {
        backgroundColor: '#F7F9FC',
        color: theme.palette.text.hint,
        fontWeight: 400,
        height: '30px',
        padding: '5px 16px 0 16px',
        textTransform: 'uppercase',
        borderBottom: 'none',
        fontFamily: ['favorit-regular', 'Helvetica', 'Arial', 'sans-serif'].join(','),
      },
      '& img': {
        paddingRight: theme.spacing(1),
      },
      '& a': {
        color: theme.palette.text.disabled,
        textDecoration: 'none',
      },
    },
  })

export const tableRowStyle = () =>
  createStyles({
    root: {
      '&:hover': {
        backgroundColor: '#F7F9FC',
      },
    },
  })
