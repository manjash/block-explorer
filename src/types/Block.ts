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
