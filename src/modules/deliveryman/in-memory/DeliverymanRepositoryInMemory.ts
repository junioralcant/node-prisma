import { ICreateDeliveryDTO } from '../dtos/ICreateDeliverymanDTO';
import { Deliveryman } from '../entities/Deliveryman';
import { IDeliverymanRepository } from '../repositories/IDeliverymanRepository';

class DeliverymanRepositoryInMemory
  implements IDeliverymanRepository
{
  deliverymans: Deliveryman[] = [];

  async create({
    username,
    password,
  }: ICreateDeliveryDTO): Promise<void> {
    const deliveryman = new Deliveryman({
      username,
      password,
    });

    Object.assign(deliveryman, { username, password });

    this.deliverymans.push(deliveryman);
  }

  async findByUserName(username: string): Promise<Deliveryman> {
    const deliveryman = this.deliverymans.find(
      (deliveryman) => deliveryman.username === username
    );

    return deliveryman as Deliveryman;
  }

  async findAllDeliveriesFromDeliveryman(
    id_deliveryman: string
  ): Promise<Deliveryman[]> {
    let deliveyman = this.deliverymans.find(
      (deliveryman) => deliveryman.id === id_deliveryman
    );

    return [deliveyman] as Deliveryman[];
  }
}

export { DeliverymanRepositoryInMemory };
