import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import Metrics from '../../components/Dashboard/Metrics'
import BlocksList from '../../components/BlocksList/BlocksList'
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper'
import { RoutePath } from '../../routes'
import { blockList as mockData } from '../../mocks/BlockMock'

const Dashboard = () => {
  const { t } = useTranslation()

  return (
    <>
      <Box marginBottom={4}>
        <Metrics />
      </Box>
      <BoxWrapper title={t('app.dashboard.blocks.latestBlocksTitle')}>
        <BlocksList blockList={mockData(5)} />

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
