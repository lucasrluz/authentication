import { CreateUserUseCase } from '../../../../src/use-case/user/create-user-use-case';
import { UserWithEmptyEmail, ValidUser } from '../../../util/data/user';
import { FakeUserRepository } from '../../../util/repositories/fake-user-repository';

describe('Create user use case tests', () => {
  it('Should return new user', async () => {
    const userRepository = new FakeUserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    jest
      .spyOn(userRepository, 'findByEmail')
      .mockReturnValue(
        Promise.resolve({ userId: undefined, email: undefined }),
      );

    jest
      .spyOn(userRepository, 'create')
      .mockReturnValue(Promise.resolve({ userId: 'validUserId' }));

    const userData = new ValidUser();

    const response = await createUserUseCase.perform(
      userData.email,
      userData.password,
    );

    expect(response.isSuccess()).toEqual(true);
  });

  it('Should return error', async () => {
    const userRepository = new FakeUserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    const userData = new UserWithEmptyEmail();

    const response = await createUserUseCase.perform(
      userData.email,
      userData.password,
    );

    expect(response.isError()).toEqual(true);
  });

  it('Should return error', async () => {
    const userRepository = new FakeUserRepository();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    jest.spyOn(userRepository, 'findByEmail').mockReturnValue(
      Promise.resolve({
        userId: 'validUserId',
        email: 'validEmail@gmail.com',
      }),
    );

    const userData = new ValidUser();

    const response = await createUserUseCase.perform(
      userData.email,
      userData.password,
    );

    expect(response.isError()).toEqual(true);
    expect(response.value).toEqual('Este e-mail já está cadastrado');
  });
});
