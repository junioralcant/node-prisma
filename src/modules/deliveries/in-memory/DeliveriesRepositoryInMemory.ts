import { ICreateDeliveriesDTO } from '../dtos/ICreateDeliveriesDTO';
import { IUpdateDeliveryDTO } from '../dtos/IUpdateDeliveryDTO';
import { Delivery } from '../entities/Delivery';
import { IDeliveriesRepository } from '../repositories/IDeliveriesRepository';

class DeliveriesRepositoryInMemory implements IDeliveriesRepository {
  deliveries: Delivery[] = [];

  async create({
    item_name,
    id_client,
  }: ICreateDeliveriesDTO): Promise<Delivery> {
    const delivery = new Delivery({
      item_name,
      id_client,
    });

    Object.assign(delivery, {
      id_client,
      item_name,
    });

    this.deliveries.push(delivery);

    return delivery;
  }

  async findAllAvailable(): Promise<Delivery[]> {
    const deliveries = this.deliveries.filter(
      (delivery) =>
        delivery.end_at === null && delivery.id_deliveryman === null
    );

    return deliveries;
  }

  async updateDeliveryman({
    id_delivery,
    id_deliveryman,
  }: IUpdateDeliveryDTO): Promise<Delivery> {
    const delivery = this.deliveries.filter((delivery) => {
      if (delivery.id === id_delivery) {
        delivery.id_deliveryman = id_deliveryman;
        return delivery;
      }
    });

    return delivery[0];
  }
}

export { DeliveriesRepositoryInMemory };
