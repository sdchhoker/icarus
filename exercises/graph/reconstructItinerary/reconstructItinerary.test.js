const findItinerary = require('./reconstructItinerary');

test("simple case 1", () => {
  const tickets = [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]];
  const result = ["JFK", "MUC", "LHR", "SFO", "SJC"];
  expect(findItinerary(tickets)).toEqual(result);
});

test("simple case 2", () => {
  const tickets = [["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]];
  const result = ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"];
  expect(findItinerary(tickets)).toEqual(result);
});

test("simple case 3", () => {
  const tickets = [["JFK", "KUL"], ["JFK", "NRT"], ["NRT", "JFK"]];
  const result = ["JFK", "NRT", "JFK", "KUL"];
  expect(findItinerary(tickets)).toEqual(result);
});

test("complex case 1", () => {
  const tickets = [["JFK", "AAA"], ["AAA", "JFK"], ["JFK", "BBB"], ["BBB", "CCC"], ["CCC", "JFK"], ["JFK", "AAA"]];
  const expected = ["JFK", "AAA", "JFK", "BBB", "CCC", "JFK", "AAA"];
  expect(findItinerary(tickets)).toEqual(expected);
});
