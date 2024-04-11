import phoneParser from './phoneParser';

describe('Phone Parser for Contacts List', () => {
  test('Phone Parser 1', () => {
    expect(phoneParser('1234567890')).toBe('(+123)-456-7890');
  });

  test('Phone Parser 2', () => {
    expect(phoneParser('1234567')).toBe('(+123)-456-7');
  });

  test('Phone Parser 3', () => {
    expect(phoneParser('1234567890123123')).toBe('(+123)-456-7890');
  });

  test('Phone Parser 4', () => {
    expect(phoneParser('')).toBe('');
  });
});
