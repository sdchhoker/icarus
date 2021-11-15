const canJump = require('./canJump');

test("simple case 1", () => {
  const nums = [2, 3, 1, 1, 4];
  const output = true;
  expect(canJump(nums)).toBe(output);
});

test("simple case 2", () => {
  const nums = [3, 2, 1, 0, 4];
  const output = false;
  expect(canJump(nums)).toBe(output);
});

test("simple case 3", () => {
  const nums = [0];
  const output = true;
  expect(canJump(nums)).toBe(output);
});


test("simple case 4", () => {
  const nums = [0, 1];
  const output = false;
  expect(canJump(nums)).toBe(output);
});
