export const baseUrl = process.env.PUBLIC_URL || 'https://explorer.ironfish.network'

export enum RoutePath {
  Home = '/',
  Explorer = '/explorer',
  TransactionDetailPage = '/transaction/:hash/:blockHash?',
  BlockDetailPage = '/blocks/:id',
}
