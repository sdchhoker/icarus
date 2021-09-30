const buildMinHeap = require('./minHeap');

test('test min heap', () => {
  const heap = buildMinHeap();
  heap.add(0, 1);
  heap.add(1, 0);
  heap.add(2, 3);
  heap.add(3, 4);
  heap.add(4, 1);
  heap.add(5, -1);
  expect(heap.poll()).toBe(-1);
  expect(heap.poll()).toBe(0);
  expect(heap.poll()).toBe(1);
  expect(heap.poll()).toBe(1);
  expect(heap.poll()).toBe(3);
  expect(heap.poll()).toBe(4);
});