import { defaultFont, defaultPrimaryBackgroundColor } from '../base'

import { createStyles } from '@material-ui/core'

const sidebarStyle = () =>
  createStyles({
    wrapper: {
      ...defaultFont,
      display: 'flex',
    },
    content: {
      flexGrow: 1,
      backgroundColor: defaultPrimaryBackgroundColor,
    },
  })

export default sidebarStyle
