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
  formatSearchTransactionsFromJson,
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
import TransactionChip from '../../components/TransactionChip/TransactionChip'

interface ParamTypes {
  blockHash: string
  hash: string
}

const useStyles = makeStyles(transactionDetailPageStyle)
const TransactionDetailPage = () => {
  const { t } = useTranslation()
  const { blockHash: queryBlockHash, hash } = useParams<ParamTypes>()
  const classes = useStyles()

  // if we are coming from a block, we know the block hash and the transaction hash to query the transaction API
  // if we just have the transaction hash, we need to query the search API to find the transactions
  const api = queryBlockHash ? ApiUrls.BLOCK_TRANSACTION_PAGE : ApiUrls.SEARCH_TRANSACTIONS
  const params = queryBlockHash
    ? {
        block_identifier: {
          index: 0,
          hash: queryBlockHash,
        },
        transaction_identifier: {
          hash: hash.toUpperCase(),
        },
      }
    : {
        transaction_identifier: {
          hash: hash.toUpperCase(),
        },
      }
  const format = queryBlockHash ? formatTransactionFromJson : formatSearchTransactionsFromJson
  const service = useGetService<Transaction>(getApiUrl(api), params, format)

  const serviceResult = service.status === ServiceState.LOADED && service.payload.result
  const transactionData = Array.isArray(serviceResult)
    ? serviceResult.length > 0
      ? serviceResult[0]
      : null
    : serviceResult
  const blockHash = queryBlockHash || transactionData?.block_identifier?.hash
  const metaVariables = { blockHash, hash }

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
                title: getDisplayShortHash(blockHash || ''),
                to: getBlockDetailPageUrl(blockHash),
                logo: blocks,
              },
              {
                title: getDisplayShortHash(transactionData.transaction_identifier.hash || ''),
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
              {transactionData && transactionData.metadata.isMinerFee && (
                <TransactionChip inline />
              )}
            </span>
          }
        >
          {service.status === ServiceState.ERROR ||
            (serviceResult && !transactionData && (
              <Error404
                title={t('app.transactionDetailPage.information.error.title')}
                description={t('app.transactionDetailPage.information.error.description')}
              />
            ))}
          {transactionData && (
            <InformationPanel
              blockHash={blockHash}
              transactionHash={hash}
              fee={getIRFAmountWithCurrency(transactionData.metadata.fee)}
              isMinerFee={transactionData.metadata.isMinerFee}
              confirmations={transactionData.confirmations}
              timestamp={transactionData.timestamp}
              size={getDisplaySizeInBytes(transactionData.metadata.size)}
              spendsReceipts={`${transactionData.metadata.spends.length} / ${transactionData.metadata.notes.length}`}
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
                <SpendsList spends={transactionData.metadata.spends} />
              </BoxWrapper>
            </div>
            <div className={classes.blocks}>
              <BoxWrapper header={t('app.transactionDetailPage.receipts')}>
                <ReceiptsList notes={transactionData.metadata.notes} />
              </BoxWrapper>
            </div>
          </Box>
        )}
      </Container>
    </>
  )
}

export default TransactionDetailPage
