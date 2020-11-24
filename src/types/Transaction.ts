export default interface Transaction {
  blockId: number
  confirmations: number
  fee: number
  hash: string
  receipts: number
  size: number
  spends: number
  timestamp: Date
}

export type Transactions = Transaction[]
