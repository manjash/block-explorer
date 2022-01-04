/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import axios from 'axios'
import { useLastLocation } from 'react-router-last-location'

import Box from '@material-ui/core/Box'

import Loading from '../../components/Loading/Loading'
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper'
import BlocksList from '../../components/BlocksList/BlocksList'
import RefreshButton from '../../components/RefreshButton/RefreshButton'
import Meta from '../../components/Meta/Meta'
import Alert from '../../components/Alert/Alert'
import Container from '../../components/Container/Container'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import { getFromLocalStorage, saveToLocalStorage } from '../../utils/persistedStorage'

import useInfiniteScroll, { DoneFunction } from '../../hooks/useInfiniteScroll'
import { RoutePath } from '../../routes/routePath'
import { ApiUrls, getApiUrl } from '../../services/servicesUrls'
import Block, { formatBlocksFromJson } from '../../types/Block'
import { ServiceState } from '../../types/Service'
import blocksGray from '../../assets/images/breadcrumb/blocks-gray.svg'

const LOCAL_STORAGE_KEY = 'IRON_EXPLORER_DATA'

const Explorer = (): JSX.Element => {
  const { t } = useTranslation()
  const lastLocation = useLastLocation()

  const isUserComingFromBlocksPage = lastLocation
    ? lastLocation.pathname?.indexOf('/blocks/') > -1
    : false

  const defaultStateValue = {
    status: ServiceState.INIT,
    error: null,
    blocks: [] as Block[],
    seek: 0,
    after: 0,
    hasMoreItems: true,
  }

  const [result, setResult] = useState(
    () =>
      (isUserComingFromBlocksPage && getFromLocalStorage(LOCAL_STORAGE_KEY)) ||
      defaultStateValue,
  )
  const [isFetching, resetAndFetch] = useInfiniteScroll(
    window,
    document,
    fetchMoreListItems,
    result.hasMoreItems,
  )

  const refreshlist = () => {
    window.scrollTo({ top: 0 })
    // reset state to default
    setResult(defaultStateValue)
    saveToLocalStorage(LOCAL_STORAGE_KEY, null)
    // reset and trigger infinite scroll
    resetAndFetch()
  }

  function fetchMoreListItems(done: DoneFunction) {
    axios
      .get(
        getApiUrl(ApiUrls.SEARCH_BLOCKS) +
          new URLSearchParams({
            limit: '21',
            main: 'true',
            after: result.after,
          }).toString(),
      )
      .then((response) => {
        setResult((prevState: any) => {
          const blocksArray = response.data.data
          const newState = {
            ...prevState,
            status: ServiceState.LOADED,
            blocks: [...prevState.blocks, ...formatBlocksFromJson(blocksArray)],
            after: blocksArray[blocksArray.length - 1]?.id,
            hasMoreItems: response.data.metadata.has_next ? true : false,
          }
          saveToLocalStorage(LOCAL_STORAGE_KEY, newState)
          return newState
        })

        done(!response.data.metadata.has_next)
      })
      .catch((error) => {
        saveToLocalStorage(LOCAL_STORAGE_KEY, null)
        setResult((prevState: any) => ({ ...prevState, status: ServiceState.ERROR, error }))
      })
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

      <RefreshButton onClick={refreshlist} />
      <BoxWrapper header={t('app.explorer.title')}>
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
