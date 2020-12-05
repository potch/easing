// general conventions
// ranges are specified in alphabetical pairs: (a, b) (c, d)
// n is an arbitrary number
// t is in the range (0..1)

// map (0..1) in t to (a..b)
export const lerp = (a, b, t) => a + (b - a) * t;

// map (a..b) in n to (0..1)
export const ilerp = (a, b, n) => (n - a) / (b - a);

// clamp n to the range (a..b)
export const clamp = (a, b, n) => Math.max(a, Math.min(t, b));

// transform (a..b) in n to (c..d)
export const scale = (a, b, c, d, n) => lerp(c, d, ilerp(a, b, n));

// reduced quadratic bezier
// unreduced is lerp(lerp(a, b, t), lerp(b, c, t), t)
/*
  A + (B - A) * t
  (a + (b - a) * t) + ((b + (c - b) * t) - (a + (b - a) * t)) * t
  (a + bt - at) + ((b + ct - bt) - (a + bt - at)) * t
  a + bt - at + (b + ct - bt - a - bt + at) * t
  a + bt - at + bt + ct2 - at - bt2 + at2
  at2 - bt2 + ct2 - 2at + 2bt + a
  (a - b + c) * t2 + 2(b - a)t + a
*/
export const quadEase = (a, b, c, t) => ((a - b + c) * t + (b - a) * 2) * t + a;
