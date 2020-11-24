import React from 'react'
import { useTranslation } from 'react-i18next'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { Receipts } from '../../types/Receipt'

import { StyledTableCell, StyledTableRow } from '../Table/Table'

interface Prop {
  receipts: Receipts
}

const ReceiptsList = ({ receipts }: Prop) => {
  const { t } = useTranslation()

  return (
    <TableContainer component={Paper}>
      <Table aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='right'>
              {t('app.components.receipts.noteCommitment')}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {receipts.map((receipt) => (
            <StyledTableRow key={receipt.noteCommitment}>
              <StyledTableCell align='right'>{receipt.noteCommitment}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ReceiptsList
