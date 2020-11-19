import { RoutePath } from '../routes'

export const getBlockDetailPageUrl = (id: Number): string => {
  return RoutePath.BlockDetailPage.replace(':id', String(id))
}

export const getTransactionDetailPageUrl = (id: Number): string => {
  return RoutePath.TransactionDetailPage.replace(':id', String(id))
}
