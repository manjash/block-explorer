import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

import { Box } from '@material-ui/core'

import Error404 from '../../components/Error404/Error404'
import Alert, { AlertType } from '../../components/Alert/Alert'
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import InformationPanel from '../../components/InformationPanel/InformationPanel'
import SpendsList from '../../components/SpendsList/SpendsList'
import ReceiptsList from '../../components/ReceiptsList/ReceiptsList'
import Meta from '../../components/Meta/Meta'

import { ApiUrls, getApiUrl } from '../../services/servicesUrls'
import useGetService from '../../services/useGetService'
import { ServiceState } from '../../types/Service'
import Transaction, {
  // formatSearchTransactionsFromJson,
  formatTransactionFromJson,
} from '../../types/Transaction'

import { getBlockDetailPageUrl } from '../../utils/routes'
import { RoutePath } from '../../routes/routePath'

import transactionDetailPageStyle from '../../assets/jss/containers/transactionDetailPageStyle'

import { getIRFAmountWithCurrency } from '../../utils/currency'
import { getDisplaySizeInBytes } from '../../utils/size'
import { getDisplayShortHash } from '../../utils/string'

import blocks from '../../assets/images/breadcrumb/blocks.svg'
import transaction from '../../assets/images/breadcrumb/transaction-gray.svg'
import Container from '../../components/Container/Container'
// import TransactionChip from '../../components/TransactionChip/TransactionChip'

interface ParamTypes {
  blockHash: string
  hash: string
}

const useStyles = makeStyles(transactionDetailPageStyle)
const TransactionDetailPage = () => {
  const { t } = useTranslation()
  const { hash } = useParams<ParamTypes>()
  const classes = useStyles()

  // if we are coming from a block, we know the block hash and the transaction hash to query the transaction API
  // if we just have the transaction hash, we need to query the search API to find the transactions
  // const api = queryBlockHash ? ApiUrls.BLOCK_TRANSACTION_PAGE : ApiUrls.SEARCH_TRANSACTIONS
  // const api = ApiUrls.TRANSACTION_DETAIL_PAGE
  // const params = { hash: hash.toLowerCase(), with_block: true }
  // const format = formatTransactionFromJson
  const service = useGetService<Transaction>(
    getApiUrl(ApiUrls.TRANSACTION_DETAIL_PAGE),
    {
      hash,
      with_block: true,
    },
    formatTransactionFromJson,
  )

  const transactionData = service.status === ServiceState.LOADED && service.payload.result
  // const transactionData = Array.isArray(serviceResult)
  //   ? serviceResult.length > 0
  //     ? serviceResult[0]
  //     : null
  //   : serviceResult
  const metaVariables = {
    blockHash: transactionData ? `${transactionData.block?.hash}` : '',
    hash: transactionData ? transactionData.hash : '',
  }

  return (
    <>
      <Container>
        {transactionData && (
          <Meta path={RoutePath.TransactionDetailPage} variables={metaVariables} />
        )}

        {transactionData && (
          <Breadcrumb
            paths={[
              {
                title: t('app.components.breadcrumb.explorer'),
                to: RoutePath.Explorer,
                logo: blocks,
              },
              {
                title: getDisplayShortHash(transactionData.block?.hash || ''),
                to: getBlockDetailPageUrl(transactionData.block?.hash),
                logo: blocks,
              },
              {
                title: getDisplayShortHash(transactionData.hash || ''),
                logo: transaction,
              },
            ]}
          />
        )}

        <BoxWrapper
          marginBottom={2}
          isLoading={service.status === ServiceState.LOADING}
          header={
            <span>
              {t('app.transactionDetailPage.information.title')}{' '}
              {/* {transactionData && transactionData.metadata.isMinerFee && (
                <TransactionChip inline />
              )} */}
            </span>
          }
        >
          {service.status === ServiceState.ERROR ||
            (!transactionData && (
              <Error404
                title={t('app.transactionDetailPage.information.error.title')}
                description={t('app.transactionDetailPage.information.error.description')}
              />
            ))}
          {transactionData && (
            <InformationPanel
              blockHash={transactionData.block?.hash}
              transactionHash={hash}
              fee={getIRFAmountWithCurrency(transactionData.fee)}
              // isMinerFee={transactionData.isMinerFee}
              // confirmations={transactionData.confirmations}
              timestamp={transactionData.timestamp}
              size={getDisplaySizeInBytes(transactionData.size)}
              spendsReceipts={`${transactionData.spends.length} / ${transactionData.notes.length}`}
            />
          )}
        </BoxWrapper>
      </Container>

      {transactionData && (
        <div className={classes.warningContainer}>
          <Alert
            type={AlertType.Information}
            title={t('app.transactionDetailPage.warning.title')}
          >
            {t('app.transactionDetailPage.warning.description')}
            <a href='https://www.ironfish.network'>
              {t('app.transactionDetailPage.warning.link')}
            </a>
          </Alert>
        </div>
      )}

      <Container>
        {transactionData && (
          <Box marginTop={2} className={classes.root}>
            <div className={classes.blocks}>
              <BoxWrapper header={t('app.transactionDetailPage.spends')}>
                <SpendsList spends={transactionData.spends} />
              </BoxWrapper>
            </div>
            <div className={classes.blocks}>
              <BoxWrapper header={t('app.transactionDetailPage.receipts')}>
                <ReceiptsList notes={transactionData.notes} />
              </BoxWrapper>
            </div>
          </Box>
        )}
      </Container>
    </>
  )
}

export default TransactionDetailPage
