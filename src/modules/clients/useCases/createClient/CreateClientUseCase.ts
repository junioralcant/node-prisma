import { hash } from 'bcrypt';
import { prisma } from '../../../../database/prismaClient';
import { ClientsRepsoitories } from '../../repositories/implementations/ClientsRepositories';

interface ICreateClient {
  username: string;
  password: string;
}

export class CreateClientUseCase {
  constructor(
    private clientsRepositories = new ClientsRepsoitories()
  ) {}

  async execute({ username, password }: ICreateClient) {
    const clientExist = await this.clientsRepositories.findByUsername(
      username
    );

    if (clientExist) {
      throw new Error('Client already exists.');
    }

    const hashPassword = await hash(password, 10);

    const client = await this.clientsRepositories.create({
      username,
      password: hashPassword,
    });

    return client;
  }
}
