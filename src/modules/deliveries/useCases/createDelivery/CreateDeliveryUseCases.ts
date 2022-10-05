import { prisma } from '../../../../database/prismaClient';
import { DeliveriesRepository } from '../../infra/prisma/repositores/DeliveriesRepository';

interface ICreateDelivery {
  item_name: string;
  id_client: string;
}

export class CreateDeliveryUseCases {
  constructor(
    private deliveriesRepository = new DeliveriesRepository()
  ) {}

  async execute({ item_name, id_client }: ICreateDelivery) {
    const delivery = await this.deliveriesRepository.create({
      item_name,
      id_client,
    });

    return delivery;
  }
}
