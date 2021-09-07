import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import classNames from 'classnames'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { getDisplaySizeInBytes } from '../../utils/size'
import blocksListSmall from '../../assets/jss/components/BlocksList/blocksListSmall'
import transactionIcon from '../../assets/images/breadcrumb/transaction.svg'
import { Transactions } from '../../types/Transaction'
import { getIRFAmountWithCurrency } from '../../utils/currency'
import { getTransactionDetailPageUrl } from '../../utils/routes'
import { getDisplayShortHash } from '../../utils/string'
import BoxWrapper from '../BoxWrapper/BoxWrapper'
import TransactionChip from '../TransactionChip/TransactionChip'

interface Prop {
  transactions: Transactions
  blockHash: string
}
const useStyles = makeStyles(blocksListSmall)

const TransactionsListSmall = ({ blockHash, transactions }: Prop) => {
  const { t } = useTranslation()
  const classes = useStyles()

  return (
    <BoxWrapper header={t('app.transactionsContainer.title')}>
      {transactions.map((transaction, index) => (
        <div
          key={transaction.hash}
          className={classNames(classes.item, {
            [classes.firstItem]: index === 0,
          })}
        >
          <div className={classes.content}>
            {/* {transaction.isMinerFee && (
              <div className={classes.chip}>
                <TransactionChip />
              </div>
            )} */}

            <Typography variant='subtitle2'>
              {t('app.components.transactionslist.hash')}
            </Typography>
            <Typography variant='body1'>
              <Link
                className={classes.link}
                to={getTransactionDetailPageUrl(blockHash, transaction.hash)}
              >
                <img src={transactionIcon} role='presentation' />
                {getDisplayShortHash(transaction.hash)}
              </Link>
            </Typography>
          </div>
          <div className={classes.content}>
            <Typography variant='subtitle2'>
              {t('app.components.transactionslist.fee')}
            </Typography>
            <Typography variant='body1'>{getIRFAmountWithCurrency(transaction.fee)}</Typography>
          </div>
          <div className={classes.content}>
            <Typography variant='subtitle2'>
              {t('app.components.transactionslist.bytes')}
            </Typography>
            <Typography variant='body1'>{getDisplaySizeInBytes(transaction.size)}</Typography>
          </div>
        </div>
      ))}
    </BoxWrapper>
  )
}

export default React.memo(TransactionsListSmall)
