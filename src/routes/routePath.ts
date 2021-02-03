export const baseUrl = process.env.PUBLIC_URL || 'https://explorer.ironfish.network'

export enum RoutePath {
  Home = '/',
  Explorer = '/explorer',
  TransactionDetailPage = '/transaction/:blockHash/:hash',
  BlockDetailPage = '/blocks/:id',
}
