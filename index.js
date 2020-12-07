// general conventions
// ranges are specified in alphabetical pairs: (a, b) (c, d)
// n is an arbitrary number
// t is in the range (0..1)

// map (0..1) in t to (a..b)
export const lerp = (a, b, t) => a + (b - a) * t;

// map (a..b) in n to (0..1)
export const ilerp = (a, b, n) => (n - a) / (b - a);

// clamp n to the range (a..b)
export const clamp = (a, b, n) => Math.max(a, Math.min(n, b));

// transform (a..b) in n to (c..d)
export const scale = (a, b, c, d, n) => lerp(c, d, ilerp(a, b, n));

// reduced quadratic bezier
// unreduced is lerp(lerp(a, b, t), lerp(b, c, t), t)
export const quadEase = (a, b, c, t) => ((a - 2 * b + c) * t + (b - a) * 2) * t + a;

// reduced cubic bezier
// based on basis functions for cubic beziers
export const cubicEase = (a, b, c, d, t) => {
  let u = 1 - t;
  return a * u * u * u + 
         b * 3 * u * u * t +
         c * 3 * u * t * t +
         d * t * t * t;
}
