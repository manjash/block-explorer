export default interface Transaction {
  size: number
  hash: string
  fee: number
}

export type Transactions = Transaction[]
