import delay from './delay';
import square from './square';

describe('Delay', () => {
  test('sum', async () => {
    const sum = await delay(() => 2 + 2, 1000);
    expect(sum).toBe(4);
  });

  test('square', async () => {
    const sum = await delay(() => square(4), 1000);
    expect(sum).toBe(16);
  });
});
