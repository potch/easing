import tap from 'tap';
import { lerp, quadEase, cubicEase, scale } from './index.js';

const SAMPLE_RESOLUTION = 4;

tap.test('scale sampling', tap => {
  for (let i = 0; i <= SAMPLE_RESOLUTION; i++) {
    let t = i / SAMPLE_RESOLUTION;
    tap.equal(scale(0, 1, 0, SAMPLE_RESOLUTION, t), i);
  }
  tap.end();
});

tap.test('bezier sampling', tap => {
  tap.test('quad', tap => {
    const referenceQuad = (a, b, c, t) => lerp(lerp(a, b, t), lerp(b, c, t), t);
    const a = 0, b = .25, c = 1;
    for (let i = 0; i <= SAMPLE_RESOLUTION; i++) {
      let t = i / SAMPLE_RESOLUTION;
      tap.equal(referenceQuad(a, b, c, t), quadEase(a, b, c, t));
    }
    tap.end();
  });

  tap.test('cubic', tap => {
    const referenceCubic = (a, b, c, d, t) => lerp(
      lerp(lerp(a, b, t), lerp(b, c, t), t),
      lerp(lerp(b, c, t), lerp(c, d, t), t),
      t
    );
    const a = 0, b = .125, c = .75, d = 1;
    for (let i = 0; i <= SAMPLE_RESOLUTION; i++) {
      let t = i / SAMPLE_RESOLUTION;
      tap.equal(referenceCubic(a, b, c, d, t), cubicEase(a, b, c, d, t));
    }
    tap.end();
  });
  tap.end();
});
