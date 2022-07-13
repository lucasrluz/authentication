import { error, success } from '../../../shared/response';

export const validatePassword = (password: string) => {
  const minPasswordSize = 6;

  if (typeof password !== 'string') return error('A senha deve ser uma string');

  if (password.length < minPasswordSize)
    return error(
      `A senha deve ter um tamanho mínimo de ${minPasswordSize} caracteres`,
    );

  return success(password);
};
