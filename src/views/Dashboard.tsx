import React from 'react'
import { Link } from 'react-router-dom'

import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

import { useTranslation } from 'react-i18next'

import Metrics from '../components/Dashboard/Metrics'
import BlocksList from '../components/BlocksList/BlocksList'
import BoxWrapper from '../components/BoxWrapper/BoxWrapper'
import { RoutePath } from '../routes'

const Dashboard = () => {
  const { t } = useTranslation()

  return (
    <>
      <Box marginBottom={4}>
        <Metrics />
      </Box>
      <BoxWrapper title={t('app.dashboard.blocks.latestBlocksTitle')}>
        <BlocksList />

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
