import { ICreateDeliveriesDTO } from '../dtos/ICreateDeliveriesDTO';
import { Delivery } from '../entities/Delivery';

export interface IDeliveriesRepository {
  create(data: ICreateDeliveriesDTO): Promise<Delivery>;

  findAllAvailable(): Promise<Delivery[]>;
}
