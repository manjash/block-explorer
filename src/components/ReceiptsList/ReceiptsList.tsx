import React from 'react'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import noteIcon from '../../assets/images/note.svg'
import { Notes } from '../../types/Note'
import { copyToClipboard } from '../../utils/copyToClipboard'
import { StyledTableCell, StyledTableRow } from '../Table/Table'
import spendsList from '../../assets/jss/components/SpendsList/spendsList'

interface Prop {
  notes: Notes
}
const useStyles = makeStyles(spendsList)

const ReceiptsList = ({ notes }: Prop) => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='left'>
              {t('app.components.receipts.noteCommitment')}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notes.map((note) => (
            <StyledTableRow key={note.commitment}>
              <StyledTableCell align='left'>
                <div
                  className={classes.root}
                  title={t('app.navigation.copy')}
                  onClick={() => copyToClipboard(note.commitment)}
                >
                  <img src={noteIcon} role='presentation' />
                  {note.commitment}
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ReceiptsList
