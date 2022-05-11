// npm
const random = require('math-random')

// setup
const ITERATIONS = 100000

// keep a count of some things
const total = {
  a: 0,
  b: 0,
  l: 0,
  h: 0,
  k: 0,
}
let tooLow = 0
let between = 0
let tooHigh = 0

for ( let i = 0; i < ITERATIONS; i++ ) {
  // Candle A
  const a = random()
  total.a += a

  // Candle B
  const b = random()
  total.b += b

  // Knife
  const k = random()
  total.k += k

  // Low of A and B
  const l = Math.min(a, b)
  total.l += l

  // High of A and B
  const h = Math.max(a, b)
  total.h += h

  if ( k > l && k < h ) {
    between++
  }
  else if ( k < l ) {
    tooLow++
  }
  else if ( k > h ) {
    tooHigh++
  }
  else {
    throw new Error("Shouldn't ever be here")
  }
}

console.log(`Avg A   = ${total.a / ITERATIONS}`)
console.log(`Avg B   = ${total.b / ITERATIONS}`)
console.log(`Avg K   = ${total.k / ITERATIONS}`)
console.log(`Avg L   = ${total.l / ITERATIONS}`)
console.log(`Avg H   = ${total.h / ITERATIONS}`)
console.log()
console.log(`Below   = ${tooLow}`)
console.log(`between = ${between}`)
console.log(`Above   = ${tooHigh}`)
