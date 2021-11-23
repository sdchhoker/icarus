/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isOneEditDistance = function (s, t) {
  if (s.length > t.length + 1 || t.length > s.length + 1) return false;
  if (s.length > t.length) return isOneEditDistance(t, s);

  let p1 = 0;
  let p2 = 0;
  let hasDiff = false;

  for (let i = 0; i < t.length; i++) {
    const c1 = s.charAt(p1) || '';
    const c2 = t.charAt(p2) || '';

    if (c1 !== c2) {
      if (hasDiff) return false;
      hasDiff = true;
      if (s.length !== t.length) p1 -= 1;
    }

    p2 += 1;
    p1 += 1;
  }

  return hasDiff;
};

module.exports = isOneEditDistance;