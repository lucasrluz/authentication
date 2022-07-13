/* eslint-disable @typescript-eslint/no-explicit-any */

import { User } from '../../../src/domain/user/user';
import {
  UserWithEmptyEmail,
  UserWithEmptyEmailDomain,
  UserWithEmptyEmailLocal,
  UserWithEmptyPassword,
  UserWithInvalidEmailType,
  UserWithInvalidPasswordType,
  UserWithSizeEmailDomainLongerThanAllowed,
  UserWithSizeEmailLocalLongerThanAllowed,
  ValidUser,
} from '../../util/data/user';

describe('User domain tests', () => {
  it('Should return new user object', () => {
    const userData = new ValidUser();

    const user = User.create(userData.email, userData.password);

    expect(user.isSuccess()).toEqual(true);
    expect(user.value).toEqual(userData);
  });

  it('Should return error message', () => {
    const userData = new UserWithInvalidEmailType();

    const user = User.create(userData.email, userData.password);

    expect(user.isError()).toEqual(true);
    expect(user.value).toEqual('O e-mail deve ser uma string');
  });

  it('Should return error message', () => {
    const userData = new UserWithEmptyEmail();

    const user = User.create(userData.email, userData.password);

    expect(user.isError()).toEqual(true);
    expect(user.value).toEqual('O e-mail não pode ser vazio');
  });

  it('Should return error message', () => {
    const userData = new UserWithEmptyEmailLocal();

    const user = User.create(userData.email, userData.password);

    expect(user.isError()).toEqual(true);
    expect(user.value).toEqual(
      'O tamanho do local do e-mail deve estar entre 1 e 64 caracteres',
    );
  });

  it('Should return error message', () => {
    const userData = new UserWithSizeEmailLocalLongerThanAllowed();

    const user = User.create(userData.email, userData.password);

    expect(user.isError()).toEqual(true);
    expect(user.value).toEqual(
      'O tamanho do local do e-mail deve estar entre 1 e 64 caracteres',
    );
  });

  it('Should return error message', () => {
    const userData = new UserWithEmptyEmailDomain();

    const user = User.create(userData.email, userData.password);

    expect(user.isError()).toEqual(true);
    expect(user.value).toEqual(
      'O tamanho do domínio do e-mail deve estar entre 1 e 255 caracteres',
    );
  });

  it('Should return error message', () => {
    const userData = new UserWithSizeEmailDomainLongerThanAllowed();

    const user = User.create(userData.email, userData.password);

    expect(user.isError()).toEqual(true);
    expect(user.value).toEqual(
      'O tamanho do domínio do e-mail deve estar entre 1 e 255 caracteres',
    );
  });

  it('Should return error message', () => {
    const userData = new UserWithInvalidPasswordType();

    const user = User.create(userData.email, userData.password);

    expect(user.isError()).toEqual(true);
    expect(user.value).toEqual('A senha deve ser uma string');
  });

  it('Should return error message', () => {
    const userData = new UserWithEmptyPassword();

    const user = User.create(userData.email, userData.password);

    expect(user.isError()).toEqual(true);
    expect(user.value).toEqual(
      'A senha deve ter um tamanho mínimo de 6 caracteres',
    );
  });
});
