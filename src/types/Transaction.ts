import { Receipts } from './Receipt'
import { Spends } from './Spend'

export default interface Transaction {
  blockId: number
  confirmations?: number
  fee: number
  hash: string
  receipts: Receipts
  size: number
  spends: Spends
  timestamp: Date
}

export type Transactions = Transaction[]

export const formatTransactionFromJson = (transaction: any): Transaction => {
  return {
    ...transaction,
    size: parseInt(transaction.size),
    timestamp: new Date(transaction.timestamp),
  }
}

export const formatTransactionsFromJson = (transactions: any): Transactions => {
  return transactions.map((transaction: any) => formatTransactionFromJson(transaction))
}
