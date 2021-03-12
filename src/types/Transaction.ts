import { BlockIdentifier } from './Block'
import { Notes } from './Note'
import { Spends } from './Spend'

export interface Operation {}

export default interface Transaction {
  block_identifier?: BlockIdentifier
  confirmations?: number
  transaction_identifier: {
    hash: string
  }
  operations: Array<Operation>
  metadata: {
    notes: Notes
    spends: Spends
    size: number
    fee?: number
  }
  timestamp?: Date
}

export type Transactions = Transaction[]

export const formatTransactionFromJson = ({ transaction }: any): Transaction => ({
  ...transaction,
  size: parseInt(transaction.metadata.size),
  timestamp: new Date(transaction.metadata.timestamp),
})

export const formatTransactionsFromJson = (transactions: any): Transactions =>
  transactions.map((transaction: any) => formatTransactionFromJson(transaction))

export const formatSearchTransactionsFromJson = (searchTransactions: any): Transactions =>
  searchTransactions.transactions.map((transaction: any) => ({
    ...formatTransactionFromJson(transaction),
    block_identifier: transaction.block_identifier,
  }))

export function isTransaction(x: any): x is Transaction {
  return typeof x === 'object' && 'transaction_identifier' in x
}
