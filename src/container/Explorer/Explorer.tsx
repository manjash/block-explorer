import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Box from '@material-ui/core/Box'

import Loading from '../../components/Loading/Loading'
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper'
import BlocksList from '../../components/BlocksList/BlocksList'
import Meta from '../../components/Meta/Meta'
import { blockList as mockData } from '../../mocks/BlockMock'
import useInfiniteScroll, { DoneFunction } from '../../hooks/useInfiniteScroll'
import { RoutePath } from '../../routes/routePath'

const Explorer = () => {
  const { t } = useTranslation()

  const [items, setItems] = useState(mockData(30))
  const isFetching = useInfiniteScroll(window, document, fetchMoreListItems)

  function fetchMoreListItems(done: DoneFunction) {
    // simulate loading time
    setTimeout(() => {
      // once query is done
      setItems((prevState: any) => {
        return [...prevState, ...mockData(30)]
      })

      // simulate last page
      done(items.length >= 50)
    }, 1000)
  }

  return (
    <>
      <Meta path={RoutePath.Explorer} />

      <BoxWrapper title={t('app.dashboard.blocks.latestBlocksTitle')}>
        <BlocksList blockList={items} />
        <Box marginTop={2}>{isFetching && <Loading />}</Box>
      </BoxWrapper>
    </>
  )
}

export default Explorer
