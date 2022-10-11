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

  async findAllAvailable(): Promise<Delivery[]> {
    const deliveries = await prisma.deliveries.findMany({
      where: {
        end_at: null,
        id_deliveryman: null,
      },
    });

    return deliveries as Delivery[];
  }
}

export { DeliveriesRepository };
