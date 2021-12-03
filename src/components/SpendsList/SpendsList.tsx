import React from 'react'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import nullifier from '../../assets/images/nullifier.svg'
import { Spends } from '../../types/Spend'
import CopyElement from '../CopyElement/CopyElement'
import { StyledTableCell, StyledTableRow } from '../Table/Table'
import spendsList from '../../assets/jss/components/SpendsList/spendsList'
import { getDisplayShortHash } from '../../utils/string'

interface Prop {
  spends: Spends
}
const useStyles = makeStyles(spendsList)

const SpendsList = ({ spends }: Prop) => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='left'>
              {t('app.components.spends.nullifier')}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {spends.map(spend => (
            <StyledTableRow key={spend.nullifier}>
              <StyledTableCell align='justify'>
                <CopyElement copyString={spend.nullifier}>
                  <div className={classes.root}>
                    <img src={nullifier} role='presentation' />
                    <>{getDisplayShortHash(spend.nullifier, 23)}</>
                  </div>
                </CopyElement>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default SpendsList
