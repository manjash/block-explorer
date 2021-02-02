/* eslint-disable @typescript-eslint/no-unused-vars */
import { createStyles, Theme } from '@material-ui/core'
import { HEADER_HEIGHT } from '../../theme'

const defaultHeight = '49px'

const adStyle = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: '990px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  })

export default adStyle
