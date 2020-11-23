import { createStyles, Theme } from '@material-ui/core'

const breadcrumbStyle = (theme: Theme) =>
  createStyles({
    root: {
      height: theme.spacing(5),
      marginBottom: theme.spacing(1),
    },
    link: {
      borderRadius: theme.shape.borderRadius,
      border: `2px solid ${theme.palette.secondary.main}`,
      height: theme.spacing(3),
      padding: theme.spacing(1, 2, 1, 2),
      fontWeight: theme.typography.fontWeightBold,
      textDecoration: 'none',
      '&:hover, &:focus': {
        backgroundColor: 'transparent',
        color: theme.palette.common.black,
      },
    },
    route: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
    },
    block: {
      backgroundColor: theme.palette.secondaryBackground.main,
      borderColor: theme.palette.secondaryBackground.main,
      color: theme.palette.common.white,
    },
    transaction: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.common.white,
    },
    lastItem: {
      backgroundColor: 'transparent',
      color: theme.palette.common.black,
    },
  })

export default breadcrumbStyle
