import mapNumbersArrToString from './mapNumbersArrToString';

describe('Phone Parser for Contacts List', () => {
  test('Phone Parser 1', () => {
    expect(mapNumbersArrToString([1, 2, 3])).toEqual(['1', '2', '3']);
  });

  test('Phone Parser 2', () => {
    expect(mapNumbersArrToString([1, 2, null])).toEqual(['1', '2']);
  });

  test('Phone Parser 3', () => {
    expect(mapNumbersArrToString([undefined, 2, null])).toEqual(['2']);
  });

  test('Phone Parser 4', () => {
    expect(mapNumbersArrToString(['undefined', 2, 10 * 10])).toEqual([
      '2',
      '100',
    ]);
  });

  test('Phone Parser 5', () => {
    expect(mapNumbersArrToString([])).toEqual([]);
  });
});
