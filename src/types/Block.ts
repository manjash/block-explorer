export default interface Block {
  height: number
  size: number
  transactions: number
  difficulty?: number
  hash: string
  timestamp: Date
}

export interface Blocks {
  blocks: Block[]
}

export const formatBlockFromJson = (block: any): Block => {
  return {
    ...block,
    timestamp: new Date(block.timestamp),
  }
}
