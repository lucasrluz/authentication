import { error, success } from '../../shared/response';
import { validateEmail } from './validations/validateEmail';
import { validatePassword } from './validations/validatePassword';

export class User {
  public email: string;
  public password: string;

  private constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  public static create(email: string, password: string) {
    const emailOrError = validateEmail(email);

    if (emailOrError.isError()) return error(emailOrError.value);

    const passwordOrError = validatePassword(password);

    if (passwordOrError.isError()) return error(passwordOrError.value);

    return success(new User(email, password));
  }
}
