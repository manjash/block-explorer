/* eslint-disable @typescript-eslint/no-unused-vars */
import { createStyles, Theme } from '@material-ui/core'
import { HEADER_HEIGHT } from '../../theme'

const defaultHeight = '49px'

const adStyle = (theme: Theme) =>
  createStyles({
    root: {
      borderTop: `1px solid ${theme.palette.borderColor.main}`,
      paddingTop: '70px',
      color: theme.palette.info.main,
      fontFamily: ['extended-regular', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: '50px',
    },
    about: {
      width: '240px',
      fontSize: '11px',
      lineHeight: '16px',
    },
    background: {},
    toolbar: {
      padding: 0,
    },
    logo: {},
    links: {
      display: 'flex',
      width: '165px',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    contact: {
      paddingTop: '7px',
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      borderTop: `1px solid ${theme.palette.borderColor.main}`,
    },
    button: {
      display: 'flex',
      height: '40px',
      width: '157px',
    },
    linksBlock: {
      '& p': {
        padding: 0,
        ...theme.typography.h5,
        margin: 0,
        fontWeight: 500,
      },
      '& ul': {
        padding: 0,
      },
      '& li': {
        listStyle: 'none',
        marginBottom: '8px',
      },
      '& a': {
        textDecoration: 'none',
        fontSize: '16px',
        color: theme.palette.info.main,
      },
    },
  })

export default adStyle
