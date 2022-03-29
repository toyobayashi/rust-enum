"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = require("..");
const x = __1.Option.Some(2);
const y = __1.Option.None();
console.log(x.unwrap() === 2);
console.log(y.unwrapOr(2) === 2);
console.log(y.unwrapOrElse(() => 2) === 2);
try {
    y.unwrap();
}
catch (_) { }
console.log(x.isSome() === y.isNone());
console.log(x.and(__1.Option.None()).isNone() === true);
console.log(x.and(__1.Option.Some(3)).unwrap() === 3);
const result = __1.matchEnum(x)({
    Some: (value) => value,
    None: () => 0
});
console.log(result === 2);
const result2 = __1.matchEnum(y)({
    Some: (value) => value,
    None: () => 0
});
console.log(result2 === 0);
class Penny extends __1.Variant {
}
class Nickel extends __1.Variant {
}
class Dime extends __1.Variant {
}
class Quarter extends __1.Variant {
}
class Coin extends __1.Enum {
    get variants() {
        return {
            Penny,
            Nickel,
            Dime,
            Quarter,
        };
    }
    static Penny() {
        return new Coin(new Penny([]));
    }
    static Nickel() {
        return new Coin(new Nickel([]));
    }
    static Dime() {
        return new Coin(new Dime([]));
    }
    static Quarter() {
        return new Coin(new Quarter([]));
    }
}
const a = Coin.Quarter();
console.log(__1.matchEnum(a)({
    Penny: () => 1,
    Nickel: () => 5,
    Dime: () => 10,
    Quarter: () => 25
}));
