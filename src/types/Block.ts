import Transaction from './Transaction'

export default interface Block {
  id: number
  hash: string
  sequence: number
  previous_block_hash: string
  main: boolean
  size: number
  difficulty: number
  transactionsCount?: number
  transactions?: Array<Transaction>
  timestamp: Date
  graffiti: string
}

export interface Blocks {
  blocks: Block[]
}

export const formatBlockFromJson = ({ block }: any): Block => ({
  ...block,
  timestamp: new Date(block.timestamp),
  transactionsCount: block.transactions_count,
})

export const formatBlocksFromJson = ({ data }: any): Block[] =>
  data.map((block: any) => ({
    ...formatBlockFromJson({ block }),
  }))

export function isBlock(x: any): x is Block {
  return typeof x === 'object' && 'transactions' in x && !('block' in x)
}
