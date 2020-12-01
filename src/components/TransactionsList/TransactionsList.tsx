import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import NavigateNext from '@material-ui/icons/NavigateNext'

import { Transactions } from '../../types/Transaction'

import { StyledTableCell, StyledTableRow } from '../../components/Table/Table'

import { getTransactionDetailPageUrl } from '../../utils/routes'
import { getIRFCurrencyAmount } from '../../utils/currency'

interface Prop {
  transactions: Transactions
}

const TransactionsList = ({ transactions }: Prop) => {
  const { t } = useTranslation()

  return (
    <TableContainer component={Paper}>
      <Table aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>{t('app.components.transactionslist.hash')}</StyledTableCell>
            <StyledTableCell align='right'>
              {t('app.components.transactionslist.fee')}
            </StyledTableCell>
            <StyledTableCell align='right'>
              {t('app.components.transactionslist.bytes')}
            </StyledTableCell>
            <StyledTableCell align='right'>
              {t('app.components.blockslist.actions')}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <StyledTableRow key={transaction.hash}>
              <StyledTableCell scope='row'>
                <Link to={getTransactionDetailPageUrl(transaction.hash)}>
                  {transaction.hash}
                </Link>
              </StyledTableCell>
              <StyledTableCell align='right'>
                {getIRFCurrencyAmount(transaction.fee)}
              </StyledTableCell>
              <StyledTableCell align='right'>{transaction.size}</StyledTableCell>
              <StyledTableCell align='right'>
                <IconButton component={Link} to={getTransactionDetailPageUrl(transaction.hash)}>
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

export default TransactionsList
