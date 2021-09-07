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
import { getDisplaySizeInBytes } from '../../utils/size'
import blocksGray from '../../assets/images/breadcrumb/blocks-gray.svg'
import blocks from '../../assets/images/breadcrumb/blocks.svg'
import { getDisplayShortHash } from '../../utils/string'

type ParamTypes = {
  id: string
}

const BlockDetailPage = () => {
  const { t } = useTranslation()
  const { id } = useParams<ParamTypes>()

  const blockIdentifier = {} as { hash?: string; sequence?: number }
  if (Number.isNaN(Number(id))) {
    blockIdentifier.hash = id
  } else {
    blockIdentifier.sequence = Number(id)
  }

  const service = useGetService<Block>(
    getApiUrl(ApiUrls.BLOCK_DETAIL_PAGE),
    {
      block_identifier: blockIdentifier,
    },
    formatBlockFromJson,
  )

  const blockData = service.status === ServiceState.LOADED && service.payload.result
  const metaVariables = {
    id: blockData ? `${blockData.sequence}` : '',
    hash: blockData ? blockData.hash : '',
  }

  return (
    <Container>
      {blockData && <Meta path={RoutePath.BlockDetailPage} variables={metaVariables} />}

      {blockData && (
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
      )}

      <BoxWrapper
        isLoading={service.status === ServiceState.LOADING}
        header={t('app.blockDetailPage.information.title')}
      >
        {service.status === ServiceState.ERROR && (
          <Error404
            title={t('app.blockDetailPage.information.error.title')}
            description={t('app.blockDetailPage.information.error.description')}
          />
        )}
        <div>
          {blockData && (
            <InformationPanel
              height={blockData.sequence}
              blockHash={blockData.hash}
              size={getDisplaySizeInBytes(blockData.size)}
              transactions={blockData.transactions.length}
              difficulty={blockData.difficulty}
              timestamp={blockData.timestamp}
            />
          )}
        </div>
      </BoxWrapper>

      {blockData && blockData.transactions.length > 0 && (
        <TransactionsList
          transactions={blockData.transactions}
          blockHash={blockData.hash}
        />
      )}
    </Container>
  )
}

export default BlockDetailPage
