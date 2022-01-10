import Transaction from './Transaction'

interface ParsedBlock {
  id: number
  hash: string
  sequence: number
  previous_block_hash: string
  main: boolean
  size: number
  difficulty: number
  transactions_count: string
  transactions?: Array<Transaction>
  timestamp: Date
  graffiti: string
  time_since_last_block_ms?: number
}

export default interface Block
  extends Omit<ParsedBlock, 'timestamp' | 'transactions_count' | 'time_since_last_block_ms'> {
  timeSinceLastBlockMs?: number
  timestamp: Date
  transactionsCount: number
}

export interface Blocks {
  blocks: Block[]
}

export const formatBlockFromJson = (block: ParsedBlock): Block => ({
  ...block,
  timeSinceLastBlockMs: block.time_since_last_block_ms,
  timestamp: new Date(block.timestamp),
  transactionsCount: parseInt(block.transactions_count),
})

export const formatBlocksFromJson = (data: ParsedBlock[]): Block[] =>
  data.map((block: ParsedBlock) => formatBlockFromJson(block))

export function isBlock(x: unknown): x is Block {
  return typeof x === 'object' && !!x && 'transactions' in x && !('block' in x)
}
