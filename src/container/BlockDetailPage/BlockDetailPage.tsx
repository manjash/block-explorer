import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import TransactionsList from '../../components/TransactionsList/TransactionsList'
import Container from '../../components/Container/Container'
import Error404 from '../../components/Error404/Error404'
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import InformationPanel from '../../components/InformationPanel/InformationPanel'
import Meta from '../../components/Meta/Meta'

import { ApiUrls, getApiUrl } from '../../services/servicesUrls'
import useGetService from '../../services/useGetService'
import { ServiceState } from '../../types/Service'
import Block, { formatBlockFromJson } from '../../types/Block'

import { RoutePath } from '../../routes/routePath'
import blocksGray from '../../assets/images/breadcrumb/blocks-gray.svg'
import blocks from '../../assets/images/breadcrumb/blocks.svg'
import { getDisplayShortHash, truncateGraffitiToLimit } from '../../utils/string'
import SmallChip from '../../components/SmallChip/SmallChip'

type ParamTypes = {
  id: string
}

const BlockDetailPage = () => {
  const { t } = useTranslation()
  const { id } = useParams<ParamTypes>()

  const queryParams: { with_transactions: boolean; hash?: string; sequence?: number } = {
    with_transactions: true,
  }

  if (Number.isNaN(Number(id))) {
    queryParams.hash = id
  } else {
    queryParams.sequence = Number(id)
  }

  const service = useGetService<Block>(
    getApiUrl(ApiUrls.BLOCK_DETAIL_PAGE),
    queryParams,
    formatBlockFromJson,
  )

  const blockData = service.status === ServiceState.LOADED && service.payload.result
  if (!blockData) return null
  const { sequence, hash, transactions, graffiti, difficulty, timestamp, main } = blockData
  const metaVariables = {
    id: sequence,
    hash: hash,
  }

  return (
    <Container>
      <Meta path={RoutePath.BlockDetailPage} variables={metaVariables} />
      <Breadcrumb
        paths={[
          {
            title: t('app.components.breadcrumb.explorer'),
            to: RoutePath.Explorer,
            logo: blocks,
          },
          {
            title: getDisplayShortHash(blockData.hash || ''),
            logo: blocksGray,
          },
        ]}
      />
      <BoxWrapper
        isLoading={service.status === ServiceState.LOADING}
        header={
          <>
            {t('app.blockDetailPage.information.title')}
            {!main ? (
              <SmallChip text={t('app.blockDetailPage.information.forked')}></SmallChip>
            ) : (
              ''
            )}
          </>
        }
      >
        {service.status === ServiceState.ERROR && (
          <Error404
            title={t('app.blockDetailPage.information.error.title')}
            description={t('app.blockDetailPage.information.error.description')}
          />
        )}
        <div>
          {transactions && (
            <InformationPanel
              height={sequence}
              blockHash={hash}
              graffiti={truncateGraffitiToLimit(graffiti)}
              transactions={transactions.length}
              difficulty={difficulty}
              timestamp={timestamp}
            />
          )}
        </div>
      </BoxWrapper>
      {transactions && transactions.length > 0 && (
        <TransactionsList transactions={transactions} blockHash={hash} />
      )}
    </Container>
  )
}

export default BlockDetailPage
