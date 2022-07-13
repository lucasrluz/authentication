import { hash } from 'bcrypt';

export const createHashPassword = (password: string) => {
  const saltRounds = 10;

  return hash(password, saltRounds);
};
