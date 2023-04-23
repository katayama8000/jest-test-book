import axios from 'axios';
import User from './user';

jest.mock('axios');

test('should fetch all Users', async () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };
  (axios.get as jest.Mock).mockResolvedValue(resp);

  await expect(User.search()).resolves.toEqual(users);
  expect(axios.get).toHaveBeenCalledWith('/users');
});
