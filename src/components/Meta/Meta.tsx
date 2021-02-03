import React from 'react'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'

import { baseUrl, RoutePath } from '../../routes/routePath'
import { getBlockDetailPageUrl, getTransactionDetailPageUrl } from '../../utils/routes'

interface PageMeta {
  title: string
  description: string
  keywords: string
}

type PageType = {
  [key in RoutePath]: PageMeta
}

const Page: PageType = {
  [RoutePath.Home]: {
    title: 'app.dashboard.meta.title',
    description: 'app.meta.defaultDescription',
    keywords: 'app.meta.defaultKeywords',
  },
  [RoutePath.Explorer]: {
    title: 'app.explorer.meta.title',
    description: 'app.meta.defaultDescription',
    keywords: 'app.meta.defaultKeywords',
  },
  [RoutePath.BlockDetailPage]: {
    title: 'app.blockDetailPage.meta.title',
    description: 'app.blockDetailPage.meta.description',
    keywords: 'app.meta.defaultKeywords',
  },
  [RoutePath.TransactionDetailPage]: {
    title: 'app.transactionDetailPage.meta.title',
    description: 'app.transactionDetailPage.meta.description',
    keywords: 'app.meta.defaultKeywords',
  },
}

interface Prop {
  path: RoutePath
  variables?: { [key: string]: string | number }
}

const Meta = ({ path, variables }: Prop) => {
  const { t } = useTranslation()
  const metas = Page[path]

  let canonicalUrl = `${baseUrl}${path}`
  if (path === RoutePath.BlockDetailPage) {
    canonicalUrl = baseUrl + getBlockDetailPageUrl(Number(variables!.id))
  }
  if (path === RoutePath.TransactionDetailPage) {
    canonicalUrl =
      baseUrl +
      getTransactionDetailPageUrl(String(variables!.blockHash), String(variables!.hash))
  }

  return (
    <Helmet>
      <meta charSet='utf-8' />

      <title>
        {t(metas.title, variables)} - {t('app.meta.defaultTitle')}
      </title>

      <meta name='description' content={t(metas.description, variables)} />
      <meta name='keywords' content={t(metas.keywords)} />
      <link rel='canonical' href={canonicalUrl} />

      <meta property='og:title' content={t(metas.title, variables)} />
      <meta property='og:description' content={t(metas.description, variables)} />
      <meta name='og:site_name' content={t('app.meta.defaultTitle')} />
    </Helmet>
  )
}

export default Meta
