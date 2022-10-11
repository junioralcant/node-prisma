import { ICreateDeliveriesDTO } from '../dtos/ICreateDeliveriesDTO';
import { IUpdateDeliveryDTO } from '../dtos/IUpdateDeliveryDTO';
import { Delivery } from '../entities/Delivery';

export interface IDeliveriesRepository {
  create(data: ICreateDeliveriesDTO): Promise<Delivery>;

  findAllAvailable(): Promise<Delivery[]>;

  updateDeliveryman(data: IUpdateDeliveryDTO): Promise<Delivery>;
}
