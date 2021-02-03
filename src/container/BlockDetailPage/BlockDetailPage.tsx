import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'

import TransactionsList from '../../components/TransactionsList/TransactionsList'
import Container from '../../components/Container/Container'
import Alert from '../../components/Alert/Alert'
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import InformationPanel from '../../components/InformationPanel/InformationPanel'
import Meta from '../../components/Meta/Meta'

import { ApiUrls } from '../../services/servicesUrls'
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

  const blockIdentifier = {} as { hash?: string; index?: number }
  if (Number.isNaN(Number(id))) {
    blockIdentifier.hash = id
  } else {
    blockIdentifier.index = Number(id)
  }

  const service = useGetService<Block>(
    ApiUrls.BLOCK_DETAIL_PAGE,
    {
      block_identifier: blockIdentifier,
    },
    formatBlockFromJson,
  )

  const blockData = service.status === ServiceState.LOADED && service.payload.result
  const metaVariables = {
    id: blockData ? `${blockData.block_identifier.index}` : '',
    hash: blockData ? blockData.block_identifier.hash : '',
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
              title: getDisplayShortHash(blockData.block_identifier.hash || ''),
              logo: blocksGray,
            },
          ]}
        />
      )}

      <BoxWrapper
        isLoading={service.status === ServiceState.LOADING}
        title={t('app.blockDetailPage.information.title')}
      >
        {service.status === ServiceState.ERROR && (
          <Alert title={t('app.blockDetailPage.information.error.description')} />
        )}
        <div>
          {blockData && (
            <InformationPanel
              height={blockData.block_identifier.index}
              blockHash={blockData.block_identifier.hash}
              size={getDisplaySizeInBytes(blockData.metadata.size)}
              transactions={blockData.transactions.length}
              difficulty={blockData.metadata.difficulty}
              timestamp={blockData.timestamp}
            />
          )}
        </div>
      </BoxWrapper>

      {blockData && blockData.transactions.length > 0 && (
        <TransactionsList
          transactions={blockData.transactions}
          blockHash={blockData.block_identifier.hash}
        />
      )}
    </Container>
  )
}

export default BlockDetailPage
