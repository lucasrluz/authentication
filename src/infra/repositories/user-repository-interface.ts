export interface UserRepositoryInterface {
  create(email: string, password: string): Promise<{ userId: string }>;
  findByEmail(
    email: string,
  ): Promise<{ userId: string | undefined; email: string | undefined }>;
}
