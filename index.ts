class Cyclist<T> {
  readonly size: number
  readonly mask: number
  readonly values: (T | undefined)[]

  constructor(size: number) {
    if (!(this instanceof Cyclist)) return new Cyclist(size)
    size = twoify(size)
    this.mask = size - 1
    this.size = size
    this.values = new Array(size)
  }
  put(index: number, val: T): number {
    let pos = index & this.mask
    this.values[pos] = val
    return pos
  }
  get(index: number): T | undefined {
    return this.values[index & this.mask]
  }
  del(index: number): T | undefined {
    let pos = index & this.mask
    let val = this.values[pos]
    this.values[pos] = undefined
    return val
  }
}

interface CyclistConstructor {
  new <T>(size: number): Cyclist<T>
  <T>(size: number): Cyclist<T>
}

export = Cyclist as CyclistConstructor

function twoify(n: number) {
  if (n && !(n & (n - 1))) return n
  let p = 1
  while (p < n) p <<= 1
  return p
}
