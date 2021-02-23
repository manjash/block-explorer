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

import { ApiUrls } from '../../services/servicesUrls'
import useGetService from '../../services/useGetService'
import { ServiceState } from '../../types/Service'
import Transaction, { formatTransactionFromJson } from '../../types/Transaction'

import { getBlockDetailPageUrl } from '../../utils/routes'
import { RoutePath } from '../../routes/routePath'

import transactionDetailPageStyle from '../../assets/jss/containers/transactionDetailPageStyle'

import { getIRFCurrencyAmount } from '../../utils/currency'
import { getDisplaySizeInBytes } from '../../utils/size'
import { getDisplayShortHash } from '../../utils/string'

import blocks from '../../assets/images/breadcrumb/blocks.svg'
import transaction from '../../assets/images/breadcrumb/transaction-gray.svg'
import Container from '../../components/Container/Container'

interface ParamTypes {
  blockHash: string
  hash: string
}

const useStyles = makeStyles(transactionDetailPageStyle)
const TransactionDetailPage = () => {
  const { t } = useTranslation()
  const { blockHash, hash } = useParams<ParamTypes>()
  const classes = useStyles()

  const service = useGetService<Transaction>(
    ApiUrls.BLOCK_TRANSACTION_PAGE,
    {
      block_identifier: {
        index: 0,
        hash: blockHash,
      },
      transaction_identifier: {
        hash,
      },
    },
    formatTransactionFromJson,
  )

  const transactionData = service.status === ServiceState.LOADED && service.payload.result
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
          title={t('app.transactionDetailPage.information.title')}
        >
          {service.status === ServiceState.ERROR && (
            <Error404
              title={t('app.transactionDetailPage.information.error.title')}
              description={t('app.transactionDetailPage.information.error.description')}
            />
          )}
          {transactionData && (
            <InformationPanel
              blockHash={blockHash}
              transactionHash={hash}
              fee={getIRFCurrencyAmount(transactionData.fee)}
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
              <BoxWrapper title={t('app.transactionDetailPage.spends')}>
                <SpendsList spends={transactionData.metadata.spends} />
              </BoxWrapper>
            </div>
            <div className={classes.blocks}>
              <BoxWrapper title={t('app.transactionDetailPage.receipts')}>
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
