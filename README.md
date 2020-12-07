# easing

dependency-free collection of easing functions

## `lerp(a, b, t)`

interpolate between `a` and `b` as `t` goes from 0 to 1. Will extrapolate when `t` goes outside `0..1`

## `ilerp(a, b, n)`

returns a value `0..1` of where `n` lies between `a` and `b`. will return values outside `0..1` when `n` is outside `a..b`

## `clamp(a, b, n)`

constrain the value `n` to the range `a..b`

## `scale(a, b, c, d, n)`

map `n`'s position in the range `a..b` to the range `c..d`

## `quadEase(a, b, c, t)`

project `t` in the 1-dimensional quadratic bezier defined by `a, b, c`
an optimized equivalent to `lerp(lerp(a, b, t), lerp(b, c, t), t)`

## `cubicEase(a, b, c, d, t)`

project `t` in the 1-dimensional cubic bezier defined by `a, b, c, d`
an optimized equivalent to `lerp(lerp(lerp(a, b, t), lerp(b, c, t), t), lerp(lerp(b, c, t), lerp(c, d, t), t), t)`
