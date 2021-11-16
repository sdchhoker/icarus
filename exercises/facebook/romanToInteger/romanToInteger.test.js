const romanToInt = require('./romanToInteger');

test('test case 1', () => {
    expect(romanToInt('III')).toBe(3);
    expect(romanToInt('IV')).toBe(4);
    expect(romanToInt("CXCIX")).toBe(199);
});
