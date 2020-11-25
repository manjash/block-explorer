import { RoutePath } from '../routes/routePath'

export const getBlockDetailPageUrl = (id: number): string => {
  return RoutePath.BlockDetailPage.replace(':id', `${id}`)
}

export const getTransactionDetailPageUrl = (hash: string): string => {
  return RoutePath.TransactionDetailPage.replace(':hash', hash)
}
