const palindromicSubString = require('./palindromicSubString')

test('test case 1', () => {
  expect(palindromicSubString('babad')).toEqual('bab');
  expect(palindromicSubString('aaaaaa')).toEqual('aaaaaa');
  expect(palindromicSubString('a')).toEqual('a');
  expect(palindromicSubString('"aacabdkacaa"')).toEqual('aca');
  expect(palindromicSubString('cbbd')).toEqual('bb');
  expect(palindromicSubString('babb')).toEqual('bab');
  expect(palindromicSubString("xaabacxcabaaxcabaax")).toEqual('xaabacxcabaax');
});