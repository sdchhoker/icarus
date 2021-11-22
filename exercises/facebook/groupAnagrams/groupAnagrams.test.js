const groupAnagram = require('./groupAnagrams');

test('test case 1', () => {
  const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const output = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];
  // expect(groupAnagram(strs).sort((a, b) => a.length - b.length)).toEqual(output);
  expect(groupAnagram([""]).sort((a, b) => a.length - b.length)).toEqual([[""]]);
});
