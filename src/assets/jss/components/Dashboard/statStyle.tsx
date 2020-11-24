import { createStyles, Theme } from '@material-ui/core'

const adStyle = (theme: Theme) =>
  createStyles({
    root: {
      width: '25%',
      borderRight: `1px solid ${theme.palette.borderColor?.main}`,
      padding: theme.spacing(2, 4, 2, 4),
      '&:nth-of-type(4n)': {
        borderRight: 'none',
      },
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      fontWeight: 500,
      color: theme.palette.primary.main,
      alignItems: 'center',
      marginBottom: theme.spacing(1),
    },
    iconWrapper: {
      width: 20,
      height: 18,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.shape.borderRadius,
      marginRight: theme.spacing(1),
    },
    icon: {
      color: theme.palette.common.white,
      width: 14,
      height: 14,
    },
    bar: {
      margin: theme.spacing(2, 0, 1, 0),
      backgroundColor: theme.palette.borderColor?.main,
      width: '100%',
      height: 2,
    },
    inside: {
      width: '25%',
      height: 2,
    },
    'wrapper-high': {
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
    },
    'wrapper-medium': {
      backgroundColor: '#FFC2E8',
      borderColor: '#FFC2E8',
    },
    'wrapper-low': {
      backgroundColor: '#FFCD85',
      borderColor: '#FFCD85',
    },
    'wrapper-verylow': {
      backgroundColor: '#6C5DD3',
      borderColor: '#6C5DD3',
    },
  })

export default adStyle
