import Block from './Block'
import { Notes } from './Note'
import { Spends } from './Spend'

export interface Operation {}

export default interface Transaction {
  id: number
  hash: string
  fee?: number
  size: number
  notes: Notes
  spends: Spends
  blocks?: Block[]
}

export type Transactions = Transaction[]

export const formatTransactionFromJson = (transaction: any): Transaction => ({
  ...transaction,
  size: parseInt(transaction.size),
})

export const formatTransactionsFromJson = (transactions: any): Transactions =>
  transactions.map((transaction: any) => formatTransactionFromJson(transaction))

export const formatSearchTransactionsFromJson = (data: any): Transactions =>
  data.map((transaction: any) => ({
    ...formatTransactionFromJson(transaction),
  }))

export function isTransaction(x: any): x is Transaction {
  return typeof x === 'object' && 'notes' in x && 'spends' in x
}
