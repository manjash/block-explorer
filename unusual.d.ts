interface NumberRange {
  min: number
  max: number
}

declare class Unusual {
  constructor(seed: string)
  random: () => number
  integer: (o: NumberRange) => number
  pick: <T>(xs: T[]) => T
  pickKey: (x: Record<string, unknown>) => string
  pickValue: <T>(x: Record<string, T>) => T
  floor: (x: number) => number
  floorMin: (x: number) => number
  shuffle: <T>(xs: T[]) => T[]
}

declare module 'unusual' {
  export = Unusual
}
