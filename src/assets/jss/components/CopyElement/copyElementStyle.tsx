import { createStyles } from '@material-ui/core'

const copyElementStyle = () =>
  createStyles({
    root: {
      cursor: 'pointer',
    },
    content: {
      display: 'flex',
      flexDirection: 'row',
    },
    icon: {
      marginLeft: '5px',
      paddingRight: '0px!important',
      width: '10px',
      alignSelf: 'flex-start',
    },
  })

export default copyElementStyle
