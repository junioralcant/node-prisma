import { Clients } from '@prisma/client';
import { prisma } from '../../../../database/prismaClient';
import { ICreateClientDTO } from '../../dtos/ICreateClientsDTO';

class ClientsRepsoitories {
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

  async findByUsername(username: string): Promise<Clients | null> {
    const clientExist = await prisma.clients.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });

    return clientExist;
  }
}

export { ClientsRepsoitories };
