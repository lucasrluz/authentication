import { User } from '../../domain/user/user';
import { createHashPassword } from '../../infra/external/bcrypt/createHashPassword';
import { UserRepositoryInterface } from '../../infra/repositories/user-repository-interface';
import { error, success } from '../../shared/response';

export class CreateUserUseCase {
  private userRepository: UserRepositoryInterface;

  constructor(userRepository: UserRepositoryInterface) {
    this.userRepository = userRepository;
  }

  public async perform(email: string, password: string) {
    const userOrError = User.create(email, password);

    if (userOrError.isError()) return error(userOrError.value);

    const emailOrEmpty = await this.userRepository.findByEmail(email);

    if (emailOrEmpty.userId) return error('Este e-mail já está cadastrado');

    const hashPassword = await createHashPassword(password);

    const response = await this.userRepository.create(email, hashPassword);

    return success({ userId: response.userId });
  }
}
