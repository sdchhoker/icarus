const atoi = require('./atoi');

test("test case 1", () => {
  expect(atoi("-91283472332")).toBe(-2147483648);
  expect(atoi("-912834723")).toBe(-912834723);
  expect(atoi(" -912834723")).toBe(-912834723);
  expect(atoi(" 912834723")).toBe(912834723);
  expect(atoi(" w912")).toBe(0);
  expect(atoi(" 91e2w")).toBe(91);

});
