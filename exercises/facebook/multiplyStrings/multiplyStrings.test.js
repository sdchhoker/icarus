const multiplyStrings = require('./multiplyStrings');

test('test1', () => {
    expect(multiplyStrings("10", "20")).toBe("200");
    expect(multiplyStrings("100", "20")).toBe("2000");
    expect(multiplyStrings("2", "3")).toBe("6");
    expect(multiplyStrings("25", "25")).toBe("625");
    expect(multiplyStrings("252", "25")).toBe(String(252 * 25));
    expect(multiplyStrings("401716832807512840963", "167141802233061013023557397451289113296441069")).toBe("67143675422804947379429215144664313370120390398055713625298709447");
});
