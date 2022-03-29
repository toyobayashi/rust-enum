import { matchEnum, Option, Enum, Variant } from '..'

const x = Option.Some(2)
const y = Option.None()

console.log(x.unwrap() === 2)
console.log(y.unwrapOr(2) === 2)
console.log(y.unwrapOrElse(() => 2) === 2)

try {
  y.unwrap()
} catch (_) {}

console.log(x.isSome() === y.isNone())

console.log(x.and(Option.None()).isNone() === true)
console.log(x.and(Option.Some(3)).unwrap() === 3)

const result = matchEnum(x)({
  Some: (value) => value,
  None: () => 0
})

console.log(result === 2)

const result2 = matchEnum(y)({
  Some: (value) => value,
  None: () => 0
})

console.log(result2 === 0)

class Penny extends Variant<[]> {}
class Nickel extends Variant<[]> {}
class Dime extends Variant<[]> {}
class Quarter extends Variant<[]> {}

class Coin extends Enum<{
  Penny: typeof Penny,
  Nickel: typeof Nickel,
  Dime: typeof Dime,
  Quarter: typeof Quarter,
}> {
  get variants () {
    return {
      Penny,
      Nickel,
      Dime,
      Quarter,
    }
  }

  static Penny (): Coin {
    return new Coin(new Penny([]))
  }

  static Nickel (): Coin {
    return new Coin(new Nickel([]))
  }

  static Dime (): Coin {
    return new Coin(new Dime([]))
  }

  static Quarter (): Coin {
    return new Coin(new Quarter([]))
  }
}

const a = Coin.Quarter()

console.log(matchEnum(a)({
  Penny: () => 1,
  Nickel: () => 5,
  Dime: () => 10,
  Quarter: () => 25
}))
