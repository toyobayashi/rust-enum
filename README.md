# Rust Enum for TypeScript

[API](https://github.com/toyobayashi/rust-enum/blob/main/docs/api/index.md)

```ts
const x = Option.Some(2)
const y = Option.None()

x.unwrap() === 2
y.unwrapOr(2) === 2
y.unwrapOrElse(() => 2) === 2

try {
  y.unwrap()
} catch (_) {}

x.isSome() === y.isNone()

x.and(Option.None()).isNone() === true
x.and(Option.Some(3)).unwrap() === 3

const result = matchEnum(x)({
  Some: (value) => value,
  None: () => 0
})

result === 2

const result2 = matchEnum(y)({
  Some: (value) => value,
  None: () => 0
})

result2 === 0
```
