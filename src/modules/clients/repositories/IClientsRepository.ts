import { ICreateClientDTO } from '../dtos/ICreateClientsDTO';
import { Client } from '../entities/Client';

interface IClientRepository {
  create(data: ICreateClientDTO): Promise<void>;
  findByUsername(username: string): Promise<Client | null>;
}

export { IClientRepository };
