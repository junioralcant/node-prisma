import { prisma } from '../../../../../database/prismaClient';
import { ICreateDeliveriesDTO } from '../../../dtos/ICreateDeliveriesDTO';
import { IUpdateDeliveryDTO } from '../../../dtos/IUpdateDeliveryDTO';
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

  async updateDeliveryman({
    id_delivery,
    id_deliveryman,
  }: IUpdateDeliveryDTO): Promise<Delivery> {
    const result = await prisma.deliveries.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_deliveryman,
      },
    });

    return result as Delivery;
  }
}

export { DeliveriesRepository };
