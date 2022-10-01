import { hash } from 'bcrypt';
import { ICreateClientDTO } from '../../dtos/ICreateClientsDTO';
import { ClientsRepository } from '../../infra/prisma/repositores/ClientsRepository';

export class CreateClientUseCase {
  constructor(
    private clientsRepositories = new ClientsRepository()
  ) {}

  async execute({ username, password }: ICreateClientDTO) {
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
