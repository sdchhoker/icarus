const earliestAcq = require('./earliestAcq');

test('test dummy time case 1', () => {
  expect(earliestAcq([[0,2,0],[1,0,1],[3,0,3],[4,1,2],[7,3,1]], 4)).toBe(3)
});

test('test proper time case 2', () => {
  expect(earliestAcq([[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]],  6)).toBe(20190301);
});

test('test complex', () => {
  expect(earliestAcq([[9,3,0],[0,2,1],[8,0,1],[1,3,2],[2,2,0],[3,3,1]], 4)).toBe(2);
});