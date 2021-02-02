import { createStyles, Theme } from '@material-ui/core'

const breadcrumbStyle = (theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.hint,
      height: theme.spacing(5),
      marginBottom: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        display: 'hidden',
      },
    },
    pill: {
      transition: `all 0.33s ${theme.transitions.easing.easeInOut}`,
      height: theme.spacing(3),
      textDecoration: 'none',
      cursor: 'default',
      color: theme.palette.text.hint,
      display: 'flex',
      alignItems: 'center',
      '& img': {
        marginRight: '8px',
      },
      '& span': {
        height: '13px',
        lineHeight: '13px',
      },
    },
    link: {
      color: theme.palette.text.disabled,
      '&:hover, &:focus': {
        cursor: 'pointer',
        backgroundColor: 'transparent',
        color: theme.palette.text.disabled,
      },
    },
    route: {},
    block: {},
    current: {},
    transaction: {},
    lastItem: {},
  })

export default breadcrumbStyle
