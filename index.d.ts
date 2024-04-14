declare class Cyclist<T> {
  readonly size: number
  readonly mask: number
  readonly values: (T | undefined)[]
  constructor(size: number)
  put(index: number, val: T): number
  get(index: number): T | undefined
  del(index: number): T | undefined
}
interface CyclistConstructor {
  new <T>(size: number): Cyclist<T>
  <T>(size: number): Cyclist<T>
}
declare const _default: CyclistConstructor
export = _default
