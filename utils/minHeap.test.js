const buildMinHeap = require('./minHeap');

test('test min heap', () => {
  const heap = buildMinHeap();
  heap.add(0, 1);
  heap.add(1, 0);
  heap.add(2, 3);
  heap.add(3, 4);
  heap.add(4, 1);
  heap.add(5, -1);
  expect(heap.getSize).toBe(6);
  expect(heap.poll()).toEqual({key: 5, value: -1});
  expect(heap.poll()).toEqual({key: 1, value: 0});
  expect(heap.poll()).toEqual({key: 4, value: 1});
  expect(heap.poll()).toEqual({key: 0, value: 1});
  expect(heap.poll()).toEqual({key: 2, value: 3});
  expect(heap.poll()).toEqual({key: 3, value: 4});
});