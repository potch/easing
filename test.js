import tap from 'tap';
import { lerp, quadEase } from './index.js';

console.log(tap.test);

tap.test('beziers', t => {
  t.test('quad', t => {
    const referenceQuad = (a, b, c, t) => lerp(lerp(a, b, t), lerp(b, c, t), t);
    const a = 0, b = .25, c = 1;
    for (let i = 0; i <= 10; i++) {
      let t = i / 10;
      t.equal(referenceQuad(a, b, c, t), quadEase(a, b, c, t));
    }
    t.end();
  });
});

