import { UserRepositoryInterface } from '../../../src/infra/repositories/user-repository-interface';

export class FakeUserRepository implements UserRepositoryInterface {
  create(email: string, password: string): Promise<{ userId: string }> {
    email;
    password;
    return Promise.resolve({ userId: '' });
  }

  findByEmail(
    email: string,
  ): Promise<{ userId: string | undefined; email: string | undefined }> {
    email;
    return Promise.resolve({ userId: '', email: '' });
  }
}
