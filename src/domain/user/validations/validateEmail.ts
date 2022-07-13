import { error, success } from '../../../shared/response';

export const validateEmail = (email: string) => {
  const minLocalSize = 1;
  const maxLocalSize = 64;

  const minDomainSize = 1;
  const maxDomainSize = 255;

  if (typeof email !== 'string') return error('O e-mail deve ser uma string');

  if (!email) return error('O e-mail não pode ser vazio');

  const [local, domain] = email.split('@');

  if (local.length < minLocalSize || local.length > maxLocalSize)
    return error(
      `O tamanho do local do e-mail deve estar entre ${minLocalSize} e ${maxLocalSize} caracteres`,
    );

  if (domain.length < minDomainSize || domain.length > maxDomainSize)
    return error(
      `O tamanho do domínio do e-mail deve estar entre ${minDomainSize} e ${maxDomainSize} caracteres`,
    );

  return success(email);
};
