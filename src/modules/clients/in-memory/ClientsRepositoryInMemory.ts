import { Clients } from '@prisma/client';
import { ICreateClientDTO } from '../dtos/ICreateClientsDTO';
import { IClientRepository } from '../repositories/IClientsRepository';
import { v4 as uuid } from 'uuid';

class ClientsRepositoryInMemory implements IClientRepository {
  clients: Clients[] = [];

  async create({
    username,
    password,
  }: ICreateClientDTO): Promise<void> {
    const client = Object.assign(
      {},
      {
        id: uuid(),
        username,
        password,
      }
    );

    this.clients.push(client);
  }

  async findByUsername(username: string): Promise<Clients | null> {
    const client = this.clients.find(
      (client) => client.username === username
    );

    return client as Clients;
  }
}

export { ClientsRepositoryInMemory };
