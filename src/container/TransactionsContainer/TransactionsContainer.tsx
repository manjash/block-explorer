import React from 'react'
import { useTranslation } from 'react-i18next'

import { ApiUrls } from '../../services/servicesUrls'
import useGetService from '../../services/useGetService'
import { ServiceState } from '../../types/Service'
import { Transactions } from '../../types/Transaction'

import Alert from '../../components/Alert/Alert'
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper'
import TransactionsList from '../../components/TransactionsList/TransactionsList'

interface Prop {
  hash: string
}

const TransactionsContainer = ({ hash }: Prop) => {
  const { t } = useTranslation()
  const service = useGetService<Transactions>(ApiUrls.TRANSACTIONS_LIST, { hash })

  const transactionsData = service.status === ServiceState.LOADED && service.payload.result

  return (
    <BoxWrapper
      isLoading={service.status === ServiceState.LOADING}
      title={t('app.transactionsContainer.title')}
    >
      {service.status === ServiceState.ERROR && (
        <Alert
          title={t('app.transactionsContainer.error.title')}
          description={t('app.transactionsContainer.error.description')}
        />
      )}

      {transactionsData && <TransactionsList transactions={transactionsData} />}
    </BoxWrapper>
  )
}

export default TransactionsContainer
