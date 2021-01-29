import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import Meta from '../../components/Meta/Meta'
import Metrics, { MetricsData } from '../../components/Dashboard/Metrics'
import BlocksList from '../../components/BlocksList/BlocksList'
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper'
import { RoutePath } from '../../routes/routePath'
import useGetService from '../../services/useGetService'
import { ServiceState } from '../../types/Service'
import Block, { formatBlocksFromJson } from '../../types/Block'
import { ApiUrls } from '../../services/servicesUrls'

const Dashboard = () => {
  const { t } = useTranslation()

  const service = useGetService<Block[]>(
    ApiUrls.SEARCH_BLOCKS,
    { limit: 10 },
    formatBlocksFromJson,
  )

  const blockData = service.status === ServiceState.LOADED && service.payload.result

  const metrics: MetricsData = {
    blockTime: null,
    difficulty: null,
    latestHash: null,
    height: null,
    transactionsCount: null,
  }

  if (blockData && blockData.length > 0) {
    metrics.transactionsCount = blockData[0].metadata.transactionsCount || null
    metrics.blockTime =
      (blockData[0].timestamp.getTime() - blockData[1].timestamp.getTime()) / 1000
    metrics.latestHash = blockData[0].block_identifier.hash || null
    metrics.height = blockData[0].block_identifier.index || null
    metrics.difficulty = blockData[0].metadata.difficulty || null
  }

  return (
    <>
      <Meta path={RoutePath.Dashboard} />
      <Box marginBottom={4}>
        <Metrics metrics={metrics} />
      </Box>

      <BoxWrapper
        title={t('app.dashboard.blocks.latestBlocksTitle')}
        isLoading={service.status === ServiceState.LOADING}
      >
        <BlocksList blockList={blockData ? blockData : []} />

        <Box textAlign='center' marginTop={4} marginBottom={2}>
          <Button
            component={Link}
            to={RoutePath.Explorer}
            variant='contained'
            color='secondary'
          >
            {t('app.dashboard.blocks.goToExplorer')}
          </Button>
        </Box>
      </BoxWrapper>
    </>
  )
}

export default Dashboard
