const buildQueue = require('./queue');

test("simple test", () => {
  const q = buildQueue();
  q.enqueue(1);
  q.enqueue(4);
  q.enqueue(2);
  q.enqueue(9);
  q.enqueue(8);
  q.enqueue(2);
  expect(q.peak()).toBe(1);
  expect(q.dequeue()).toBe(1);
  expect(q.dequeue()).toBe(4);
  expect(q.size()).toBe(4);
  expect(q.isEmpty()).toBe(false);
});