import React, { MutableRefObject, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { makeStyles } from '@material-ui/core/styles'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Meta from '../../components/Meta/Meta'
import Metrics, { MetricsData } from '../../components/Dashboard/Metrics'
import Container from '../../components/Container/Container'
import BlocksList from '../../components/BlocksList/BlocksList'
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper'
import { RoutePath } from '../../routes/routePath'
import useGetService from '../../services/useGetService'
import { ServiceState } from '../../types/Service'
import Block, { formatBlocksFromJson } from '../../types/Block'
import { ApiUrls } from '../../services/servicesUrls'
// import Splash from '../../components/Splash/Splash'
import Search from '../Search/Search'
import splash from '../../assets/images/splash.svg'
import arrowDown from '../../assets/images/arrow_down.svg'
import splashStyle from '../../assets/jss/components/Splash/splashStyle'
const useStyles = makeStyles(splashStyle)

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
  const classes = useStyles()

  const anchor = useRef() as MutableRefObject<HTMLDivElement>

  const executeScroll = () => {
    anchor.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Meta path={RoutePath.Dashboard} />
      <div>
        <Typography variant='h1' className={classes.h1}>
          {t('app.dashboard.title')}
        </Typography>
        <div className={classes.search}>
          <Search />
        </div>

        <p className={classes.viewAll} onClick={executeScroll}>
          {t('app.dashboard.view_blocks')}
          <img src={arrowDown} alt={t('app.header.logo.alt')} className={classes.arrowDown} />
        </p>

        <div className={classes.splash}>
          <img src={splash} alt={t('app.header.logo.alt')} className={classes.background} />
        </div>
      </div>
      <span ref={anchor} />

      <Container>
        <Box marginTop={7} marginBottom={4}>
          <Metrics metrics={metrics} />
        </Box>

        <BoxWrapper
          title={t('app.dashboard.blocks.latestBlocksTitle')}
          isLoading={service.status === ServiceState.LOADING}
        >
          <Typography variant='h6' className={classes.h6}>
            {t('app.dashboard.blocks.title')}
          </Typography>

          <BlocksList blockList={blockData ? blockData : []} />

          <Box textAlign='center' marginTop={4} marginBottom={2}>
            <Button component={Link} to={RoutePath.Explorer} variant='contained'>
              {t('app.dashboard.blocks.goToExplorer')}
            </Button>
          </Box>
        </BoxWrapper>
      </Container>
    </>
  )
}

export default Dashboard
