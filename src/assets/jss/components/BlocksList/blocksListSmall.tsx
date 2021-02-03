import { createStyles, Theme } from '@material-ui/core'

const blocksListSmall = (theme: Theme) =>
  createStyles({
    item: {
      border: `1px solid ${theme.palette.borderColor?.main}`,
      borderTop: 'none',
      padding: theme.spacing(2),
    },
    firstItem: {
      borderTop: `1px solid ${theme.palette.borderColor?.main}`,
      marginBottom: 0,
    },
    content: {
      marginBottom: theme.spacing(2),
      '&:last-of-type': {
        marginBottom: 0,
      },
      '& h6': {
        fontFamily: ['favorit-regular', 'Helvetica', 'Arial', 'sans-serif'].join(','),
        textTransform: 'uppercase',
      },
    },
    link: {
      display: 'flex',
      alignItems: 'center',
      lineHeight: '11px',
      color: theme.palette.text.disabled,
      textDecoration: 'none',
      '& img': {
        marginRight: theme.spacing(1),
      },
    },
  })
export default blocksListSmall
