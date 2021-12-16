import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import Meta from '../../components/Meta/Meta'
import Metrics, { MetricsData } from '../../components/Dashboard/Metrics'
import Container from '../../components/Container/Container'
import BlocksList from '../../components/BlocksList/BlocksList'
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper'
import { RoutePath } from '../../routes/routePath'
import useGetService from '../../services/useGetService'
import { ServiceState } from '../../types/Service'
import Block, { formatBlocksFromJson } from '../../types/Block'
import { ApiUrls, getApiUrl } from '../../services/servicesUrls'
import Splash from '../../components/Splash/Splash'
import dashboardStyle from '../../assets/jss/containers/dashboardStyle'

const useStyles = makeStyles(dashboardStyle)

const Dashboard = () => {
  const { t } = useTranslation()
  const classes = useStyles()

  const service = useGetService<Block[]>(
    getApiUrl(ApiUrls.SEARCH_BLOCKS),
    { limit: 10, main: 'true' },
    (raw) => formatBlocksFromJson(raw.data),
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
    const [firstBlock, secondBlock] = blockData
    const { transactionsCount = 0, hash, sequence, difficulty } = firstBlock
    metrics.transactionsCount = transactionsCount
    metrics.blockTime =
      (firstBlock.timestamp.getTime() - secondBlock.timestamp.getTime()) / 1000
    metrics.latestHash = hash
    metrics.height = sequence
    metrics.difficulty = difficulty
  }

  return (
    <>
      <Meta path={RoutePath.Home} />
      <Splash />
      <Container>
        <Box marginBottom={4}>
          <Metrics metrics={metrics} />
        </Box>

        <BoxWrapper
          header={t('app.dashboard.blocks.latestBlocksTitle')}
          isLoading={service.status === ServiceState.LOADING}
        >
          <BlocksList blockList={blockData ? blockData : []} />

          <Box textAlign='center' marginTop={4} marginBottom={2}>
            <Button
              component={Link}
              to={RoutePath.Explorer}
              variant='contained'
              className={classes.button}
            >
              {t('app.dashboard.blocks.goToExplorer')}
            </Button>
          </Box>
        </BoxWrapper>
      </Container>
    </>
  )
}

export default Dashboard
