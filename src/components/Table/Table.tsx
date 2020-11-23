import { withStyles } from '@material-ui/core/styles'

import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import { tableCellStyle, tableRowStyle } from '../../assets/jss/components/Table/tableStyle'

export const StyledTableCell = withStyles(tableCellStyle)(TableCell)

export const StyledTableRow = withStyles(tableRowStyle)(TableRow)
