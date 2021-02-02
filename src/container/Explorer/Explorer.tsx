import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'

import Box from '@material-ui/core/Box'

import Loading from '../../components/Loading/Loading'
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper'
import BlocksList from '../../components/BlocksList/BlocksList'
import Meta from '../../components/Meta/Meta'
import Alert from '../../components/Alert/Alert'
import Container from '../../components/Container/Container'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'

import { networkIdentifier } from '../../config'
import useInfiniteScroll, { DoneFunction } from '../../hooks/useInfiniteScroll'
import { RoutePath } from '../../routes/routePath'
import { ApiUrls } from '../../services/servicesUrls'
import Block, { formatBlocksFromJson } from '../../types/Block'
import { ServiceState } from '../../types/Service'
import blocksGray from '../../assets/images/breadcrumb/blocks-gray.svg'

const Explorer = () => {
  const { t } = useTranslation()

  const [seek, setSeek] = useState(0)
  const [result, setResult] = useState({
    status: ServiceState.INIT,
    error: null,

    blocks: [] as Block[],
  })

  const isFetching = useInfiniteScroll(window, document, fetchMoreListItems)

  function fetchMoreListItems(done: DoneFunction) {
    axios
      .post(ApiUrls.SEARCH_BLOCKS, {
        network_identifier: networkIdentifier,
        limit: 20,
        seek,
      })
      .then((response) => {
        setResult((prevState) => {
          return {
            ...prevState,
            status: ServiceState.LOADED,
            blocks: [...prevState.blocks, ...formatBlocksFromJson(response.data)],
          }
        })

        setSeek(() => response.data.next_offset)
        done(!response.data.next_offset)
      })
      .catch((error) =>
        setResult((prevState) => ({ ...prevState, status: ServiceState.ERROR, error })),
      )
  }

  return (
    <Container>
      <Meta path={RoutePath.Explorer} />

      <Breadcrumb
        paths={[
          {
            title: t('app.components.breadcrumb.explorer'),
            logo: blocksGray,
          },
        ]}
      />

      <BoxWrapper title={t('app.explorer.title')}>
        {result.status === ServiceState.ERROR && (
          <Alert title={t('app.explorer.error.title')}>
            {t('app.explorer.error.description')}
          </Alert>
        )}
        {result.status !== ServiceState.ERROR && <BlocksList blockList={result.blocks} />}
        <Box marginTop={2}>
          {result.status !== ServiceState.ERROR && isFetching && <Loading />}
        </Box>
      </BoxWrapper>
    </Container>
  )
}

export default Explorer
