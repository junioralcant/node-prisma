import { prisma } from '../../../../../database/prismaClient';
import { ICreateDeliveriesDTO } from '../../../dtos/ICreateDeliveriesDTO';
import { Delivery } from '../../../entities/Delivery';
import { IDeliveriesRepository } from '../../../repositories/IDeliveriesRepository';

class DeliveriesRepository implements IDeliveriesRepository {
  async create({
    item_name,
    id_client,
  }: ICreateDeliveriesDTO): Promise<Delivery> {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name,
        id_client,
      },
    });

    return delivery as Delivery;
  }
}

export { DeliveriesRepository };
