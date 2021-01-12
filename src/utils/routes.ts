import { RoutePath } from '../routes/routePath'

export const getBlockDetailPageUrl = (id: number | string | undefined): string => {
  if (!id) return ''
  return RoutePath.BlockDetailPage.replace(':id', `${id}`)
}

export const getTransactionDetailPageUrl = (blockHash: string, hash: string): string => {
  return RoutePath.TransactionDetailPage.replace(':hash', hash).replace(':blockHash', blockHash)
}
