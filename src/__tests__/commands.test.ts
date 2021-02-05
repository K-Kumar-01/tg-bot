import { randomChuckCall } from '../commands';

describe('commands', () => {
  test('chuck norris api call', async () => {
    const response = await randomChuckCall();
    expect(response).toEqual(expect.any(String));
  });
});
