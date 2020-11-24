import React from 'react'
import { useTranslation } from 'react-i18next'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { Spends } from '../../types/Spend'

import { StyledTableCell, StyledTableRow } from '../Table/Table'

interface Prop {
  spends: Spends
}

const SpendsList = ({ spends }: Prop) => {
  const { t } = useTranslation()

  return (
    <TableContainer component={Paper}>
      <Table aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='right'>
              {t('app.components.spends.nullifier')}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {spends.map((spend) => (
            <StyledTableRow key={spend.nullifier}>
              <StyledTableCell align='right'>{spend.nullifier}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SpendsList
