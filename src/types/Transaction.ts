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
