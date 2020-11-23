import { RoutePath } from '../routes'

export const getBlockDetailPageUrl = (id: Number): string => {
  return RoutePath.BlockDetailPage.replace(':id', String(id))
}

export const getTransactionDetailPageUrl = (hash: string): string => {
  return RoutePath.TransactionDetailPage.replace(':hash', hash)
}
