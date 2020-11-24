import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

// import TransactionsContainer from '../TransactionsContainer/TransactionsContainer'

import Alert, { AlertType } from '../../components/Alert/Alert'
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper'
import Breadcrumb, { PillType } from '../../components/Breadcrumb/Breadcrumb'
import InformationPanel from '../../components/InformationPanel/InformationPanel'

import { ApiUrls } from '../../services/servicesUrls'
import useGetService from '../../services/useGetService'
import { ServiceState } from '../../types/Service'
import Transaction from '../../types/Transaction'

import { getBlockDetailPageUrl } from '../../utils/routes'
import { RoutePath } from '../../routes'

interface ParamTypes {
  hash: string
}

const TransactionDetailPage = () => {
  const { t } = useTranslation()
  const { hash } = useParams<ParamTypes>()

  const service = useGetService<Transaction>(ApiUrls.BLOCK_TRANSACTION_PAGE, { hash })

  const transactionData = service.status === ServiceState.LOADED && service.payload.result

  return (
    <>
      {transactionData && (
        <Breadcrumb
          paths={[
            {
              title: t('app.components.breadcrumb.blocks'),
              to: RoutePath.Explorer,
              type: PillType.Route,
            },
            {
              title: transactionData.blockId,
              to: getBlockDetailPageUrl(transactionData.blockId),
              type: PillType.Block,
            },
            {
              title: t('app.components.breadcrumb.transactions'),
              type: PillType.Transaction,
            },
            {
              title: transactionData.hash,
              type: PillType.Transaction,
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
          <Alert
            title={t('app.transactionDetailPage.information.error.title')}
            description={t('app.transactionDetailPage.information.error.description')}
          />
        )}
        {transactionData && (
          <InformationPanel
            blockId={transactionData.blockId}
            fee={transactionData.fee}
            confirmations={transactionData.confirmations}
            timestamp={transactionData.timestamp}
            size={transactionData.size}
            spendsReceipts={`${transactionData.spends} / ${transactionData.receipts}`}
          />
        )}
      </BoxWrapper>
      {transactionData && (
        <Alert
          type={AlertType.Information}
          title={t('app.transactionDetailPage.warning.title')}
          description={t('app.transactionDetailPage.warning.description')}
        />
      )}

      {/* {blockData && <TransactionsContainer hash={blockData.hash} />} */}
    </>
  )
}

export default TransactionDetailPage
