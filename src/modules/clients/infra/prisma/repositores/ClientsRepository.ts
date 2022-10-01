import { prisma } from '../../../../../database/prismaClient';
import { ICreateClientDTO } from '../../../dtos/ICreateClientsDTO';
import { Client } from '../../../entities/Client';
import { IClientRepository } from '../../../repositories/IClientsRepository';

class ClientsRepository implements IClientRepository {
  async create({
    username,
    password,
  }: ICreateClientDTO): Promise<void> {
    await prisma.clients.create({
      data: {
        username,
        password,
      },
    });
  }

  async findByUsername(username: string): Promise<Client | null> {
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });
    return clientExist as Client;
  }
}

export { ClientsRepository };
