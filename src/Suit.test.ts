import { Suit, parseSuit } from './Suit';

test('parses club', () => {
  expect(parseSuit("C")).toEqual(Suit.CLUB);
});
test('parses heart', () => {
  expect(parseSuit("H")).toEqual(Suit.HEART);
});
test('parses diamond', () => {
  expect(parseSuit("D")).toEqual(Suit.DIAMOND);
});
test('parses spade', () => {
  expect(parseSuit("S")).toEqual(Suit.SPADE);
});