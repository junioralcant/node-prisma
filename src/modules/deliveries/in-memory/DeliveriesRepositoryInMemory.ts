import { ICreateDeliveriesDTO } from '../dtos/ICreateDeliveriesDTO';
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
}

export { DeliveriesRepositoryInMemory };
