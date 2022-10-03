import { prisma } from '../../../../../database/prismaClient';
import { ICreateDeliveryDTO } from '../../../dtos/ICreateDeliverymanDTO';
import { Deliveryman } from '../../../entities/Deliveryman';
import { IDeliverymanRepository } from '../../../repositories/IDeliverymanRepository';

class DeliverymanRepository implements IDeliverymanRepository {
  async create({
    username,
    password,
  }: ICreateDeliveryDTO): Promise<void> {
    await prisma.deliveryman.create({
      data: {
        username,
        password,
      },
    });
  }

  async findByUserName(username: string): Promise<Deliveryman> {
    const deliverymanExist = await prisma.deliveryman.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive',
        },
      },
    });

    return deliverymanExist as Deliveryman;
  }

  async findAllDeliveriesFromDeliveryman(
    id_deliveryman: string
  ): Promise<Deliveryman[]> {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: id_deliveryman,
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });

    return deliveries;
  }
}

export { DeliverymanRepository };
