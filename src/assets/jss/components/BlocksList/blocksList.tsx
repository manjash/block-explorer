import { createStyles, Theme } from '@material-ui/core'

const blocksStyle = (theme: Theme) =>
  createStyles({
    row: { cursor: 'pointer' },
    root: {
      display: 'flex',
      color: theme.palette.text.disabled,
      alignItems: 'center',
      lineHeight: '11px',
    },
  })
export default blocksStyle
