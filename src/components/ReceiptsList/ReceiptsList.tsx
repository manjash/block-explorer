import React from 'react'
import { useTranslation } from 'react-i18next'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { Notes } from '../../types/Note'

import { StyledTableCell, StyledTableRow } from '../Table/Table'

interface Prop {
  notes: Notes
}

const ReceiptsList = ({ notes }: Prop) => {
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
          {notes.map((note) => (
            <StyledTableRow key={note.commitment}>
              <StyledTableCell align='right'>{note.commitment}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ReceiptsList
