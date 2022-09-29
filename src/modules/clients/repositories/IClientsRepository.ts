import { Clients } from '@prisma/client';
import { ICreateClientDTO } from '../dtos/ICreateClientsDTO';

interface IClientRepository {
  create(data: ICreateClientDTO): Promise<void>;
  findByUsername(email: string): Promise<Clients | null>;
}

export { IClientRepository };
