import { prisma } from '../../../../database/prismaClient';
import { DeliverymanRepository } from '../../infra/prisma/repositories/DeliverymanRepository';

interface IFindAllDeliveryDeliveryman {
  id_deliveryman: string;
}

export class FindAllDeliveriesDeliverymanUseCase {
  constructor(
    private deliverymanRepository = new DeliverymanRepository()
  ) {}
  async execute({ id_deliveryman }: IFindAllDeliveryDeliveryman) {
    const deliveries =
      await this.deliverymanRepository.findAllDeliveriesFromDeliveryman(
        id_deliveryman
      );

    return deliveries;
  }
}
