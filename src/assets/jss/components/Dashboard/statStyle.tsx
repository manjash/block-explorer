import { createStyles, Theme } from '@material-ui/core'

const adStyle = (theme: Theme) =>
  createStyles({
    root: {
      border: `1px solid ${theme.palette.borderColor?.main}`,
      boxShadow: theme.shadows[1],
      width: `calc(33% - 3px)`,
      height: '81px',
      alignItems: 'center',
      borderRadius: theme.shape.borderRadius,
      padding: '0px 20px 0px 20px',
      marginRight: theme.spacing(1),
      marginBottom: theme.spacing(1),
      display: 'flex',
      '&:nth-of-type(3n)': {
        marginRight: '0',
      },
      '&:nth-of-type(4n), &:nth-of-type(5n), &:nth-of-type(6n)': {
        marginBottom: '0',
      },
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        marginBottom: theme.spacing(1),
        '&:nth-of-type(4n), &:nth-of-type(5n), &:nth-of-type(6n)': {
          marginBottom: theme.spacing(1),
        },
      },
    },
    header: {
      marginBottom: '2px',
    },
    iconWrapper: {
      display: 'flex',
      alignSelf: 'center',
      marginRight: theme.spacing(1),
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    },
  })

export default adStyle
