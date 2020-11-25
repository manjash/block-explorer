export const baseUrl = process.env.PUBLIC_URL || 'https://explorer.ironfish.network'

export enum RoutePath {
  Dashboard = '/dashboard',
  Explorer = '/explorer',
  BlockDetailPage = '/blocks/:id',
  TransactionDetailPage = '/transactions/:hash',
}
