/* eslint-disable @typescript-eslint/no-explicit-any */

export class ValidUser {
  public email = 'validEmail@gmail.com';
  public password = '123456';
}

const validUser = new ValidUser();

export class UserWithInvalidEmailType {
  public email: any = true;
  public password = validUser.password;
}

export class UserWithEmptyEmail {
  public email = '';
  public password = validUser.password;
}

export class UserWithEmptyEmailLocal {
  public email = '@gmail.com';
  public password = validUser.password;
}

export class UserWithSizeEmailLocalLongerThanAllowed {
  public email =
    'invalidEmailinvalidEmailinvalidEmailinvalidEmailinvalidEmailinvalidEmail@gmail.com';
  public password = validUser.password;
}

export class UserWithEmptyEmailDomain {
  public email = 'invalidEmail@';
  public password = validUser.password;
}

export class UserWithSizeEmailDomainLongerThanAllowed {
  public email =
    'invalidEmail@gmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmail.com';
  public password = validUser.password;
}

export class UserWithInvalidPasswordType {
  public email = validUser.email;
  public password: any = true;
}

export class UserWithEmptyPassword {
  public email = validUser.email;
  public password = '';
}
