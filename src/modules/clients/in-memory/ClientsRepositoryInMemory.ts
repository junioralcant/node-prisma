import { ICreateClientDTO } from '../dtos/ICreateClientsDTO';
import { IClientRepository } from '../repositories/IClientsRepository';
import { Client } from '../entities/Client';

class ClientsRepositoryInMemory implements IClientRepository {
  clients: Client[] = [];

  async create({
    username,
    password,
  }: ICreateClientDTO): Promise<void> {
    const client = new Client({ username, password });

    Object.assign(
      { client },
      {
        username,
        password,
      }
    );

    this.clients.push(client);
  }

  async findByUsername(username: string): Promise<Client | null> {
    const client = this.clients.find(
      (client) => client.username === username
    );

    return client as Client;
  }
}

export { ClientsRepositoryInMemory };
