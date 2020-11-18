import React from 'react'
import { useTranslation } from 'react-i18next'

import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import NavigateNext from '@material-ui/icons/NavigateNext'

import Block from '../../shapes/Block'

import {
  tableCellStyle,
  tableRowStyle,
} from '../../assets/jss/components/BlocksList/blocksListStyle'
import IconButton from '@material-ui/core/IconButton'

interface Prop {
  blockList: Block[]
}

const StyledTableCell = withStyles(tableCellStyle)(TableCell)
const StyledTableRow = withStyles(tableRowStyle)(TableRow)

const BlocksList = ({ blockList }: Prop) => {
  const { t } = useTranslation()

  return (
    <TableContainer component={Paper}>
      <Table aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>{t('app.components.blockslist.height')}</StyledTableCell>
            <StyledTableCell align='right'>
              {t('app.components.blockslist.size')}
            </StyledTableCell>
            <StyledTableCell align='right'>
              {t('app.components.blockslist.transactions')}
            </StyledTableCell>
            <StyledTableCell align='left'>
              {t('app.components.blockslist.hash')}
            </StyledTableCell>
            <StyledTableCell align='right'>
              {t('app.components.blockslist.timestamp')}
            </StyledTableCell>
            <StyledTableCell align='right'>
              {t('app.components.blockslist.actions')}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blockList.map((block: Block) => (
            <StyledTableRow key={String(block.height)}>
              <StyledTableCell component='th' scope='row'>
                {block.height}
              </StyledTableCell>
              <StyledTableCell align='right'>{block.size}</StyledTableCell>
              <StyledTableCell align='right'>{block.transactions}</StyledTableCell>
              <StyledTableCell align='left'>{block.hash}</StyledTableCell>
              <StyledTableCell align='right'>
                {`${block.timestamp.toLocaleDateString()} ${block.timestamp.toLocaleTimeString()}`}
              </StyledTableCell>
              <StyledTableCell align='right'>
                <IconButton>
                  <NavigateNext />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BlocksList
