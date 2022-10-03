import { Deliveries } from '@prisma/client';
import { ICreateDeliveryDTO } from '../dtos/ICreateDeliverymanDTO';
import { Deliveryman } from '../entities/Deliveryman';

// export interface IDeliveriesResponseProps {
//   id: string;
//   username: string;
//   // deliveries: Deliveries[];
// }

export interface IDeliverymanRepository {
  create(data: ICreateDeliveryDTO): Promise<void>;

  findByUserName(username: string): Promise<Deliveryman>;

  findAllDeliveriesFromDeliveryman(
    id_deliveryman: string
  ): Promise<Deliveryman[]>;
}
