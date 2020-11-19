import React from 'react'
import { useTranslation } from 'react-i18next'
import Alert from '../../components/Alert/Alert'

import BoxWrapper from '../../components/BoxWrapper/BoxWrapper'
import BlockInformationPanel from '../../components/BlockInformationPanel/BlockInformationPanel'
import { ApiUrls } from '../../services/servicesUrls'

import useGetService from '../../services/useGetService'
import { ServiceState } from '../../types/Service'

const BlockDetailPage = () => {
  const { t } = useTranslation()
  const service = useGetService(ApiUrls.BLOCK_DETAIL_PAGE)

  return (
    <BoxWrapper
      isLoading={service.status === ServiceState.LOADING}
      title={t('app.blockDetailPage.information.title')}
    >
      {service.status === ServiceState.ERROR && (
        <Alert
          title={t('app.blockDetailPage.information.error.title')}
          description={t('app.blockDetailPage.information.error.description')}
        />
      )}
      <div>
        {service.status === ServiceState.LOADED && (
          <BlockInformationPanel block={service.payload?.result} />
        )}
      </div>
    </BoxWrapper>
  )
}

export default BlockDetailPage
