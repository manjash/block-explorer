import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { Transactions } from '../../types/Transaction'

import { StyledTableCell, StyledTableRow } from '../../components/Table/Table'

import { getTransactionDetailPageUrl } from '../../utils/routes'
import { getIRFCurrencyAmount } from '../../utils/currency'
import { getDisplaySizeInBytes } from '../../utils/size'
import BoxWrapper from '../BoxWrapper/BoxWrapper'
import transactionIcon from '../../assets/images/breadcrumb/transaction.svg'
import transactionsList from '../../assets/jss/components/TransactionsList/transactionsList'

interface Prop {
  transactions: Transactions
  blockHash: string
}
const useStyles = makeStyles(transactionsList)

const TransactionsList = ({ blockHash, transactions }: Prop) => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <BoxWrapper title={t('app.transactionsContainer.title')}>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <StyledTableRow key={transaction.transaction_identifier.hash}>
                <StyledTableCell scope='row'>
                  <Link
                    to={getTransactionDetailPageUrl(
                      blockHash,
                      transaction.transaction_identifier.hash,
                    )}
                  >
                    <div className={classes.root}>
                      <img src={transactionIcon} role='presentation' />
                      {transaction.transaction_identifier.hash}
                    </div>
                  </Link>
                </StyledTableCell>
                <StyledTableCell align='right'>
                  {getIRFCurrencyAmount(transaction.fee)}
                </StyledTableCell>
                <StyledTableCell align='right'>
                  {getDisplaySizeInBytes(transaction.metadata.size)}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BoxWrapper>
  )
}

export default TransactionsList
