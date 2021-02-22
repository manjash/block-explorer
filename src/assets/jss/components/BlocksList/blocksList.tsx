import { createStyles } from '@material-ui/core'

const blocksStyle = () =>
  createStyles({
    row: { cursor: 'pointer' },
    root: {
      display: 'flex',
      alignItems: 'center',
      lineHeight: '11px',
    },
  })
export default blocksStyle
