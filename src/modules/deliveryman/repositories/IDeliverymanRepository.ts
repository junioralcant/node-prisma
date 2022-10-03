import { ICreateDeliveryDTO } from '../dtos/ICreateDeliverymanDTO';
import { Deliveryman } from '../entities/Deliveryman';

export interface IDeliverymanRepository {
  create(data: ICreateDeliveryDTO): Promise<void>;

  findByUserName(username: string): Promise<Deliveryman>;

  findAllDeliveriesFromDeliveryman(
    id_deliveryman: string
  ): Promise<Deliveryman[]>;
}
