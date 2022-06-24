import bcrypt from 'bcrypt';
import User from '../../modules/models/user/User.mjs';

export default async function createInitialData() {
  await User.sync({ force: true });

  const password = await bcrypt.hash('123456', 10);

  await User.create({
    name: 'User',
    email: 'user@mail.com',
    password,
  });
}
