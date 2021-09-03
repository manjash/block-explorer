import { Notes } from './Note'
import { Spends } from './Spend'

export interface Operation {}

export default interface Transaction {
  hash: string
  fee?: number
  size: number
  timestamp?: Date
  notes: Notes
  spends: Spends,
  block: {
    hash: string,
    index: number,
  }
}

export type Transactions = Transaction[]

export const formatTransactionFromJson = ({ transaction }: any): Transaction => ({
  ...transaction,
  size: parseInt(transaction.size),
  timestamp: new Date(transaction.timestamp),
})

export const formatTransactionsFromJson = (transactions: any): Transactions =>
  transactions.map((transaction: any) => formatTransactionFromJson(transaction))

export const formatSearchTransactionsFromJson = (searchTransactions: any): Transactions =>
  searchTransactions.transactions.map((transaction: any) => ({
    ...formatTransactionFromJson(transaction),
    block_identifier: transaction.block.hash,
  }))

export function isTransaction(x: any): x is Transaction {
  return typeof x === 'object' && 'notes' in x && 'spends' in x
}
