import { DeliveriesRepository } from '../../../infra/prisma/repositores/DeliveriesRepository';

interface IUpdateDeliveryman {
  id_delivery: string;
  id_deliveryman: string;
}

export class UpdateDeliverymanUseCase {
  constructor(
    private deliveriesRepository = new DeliveriesRepository()
  ) {}

  async execute({ id_delivery, id_deliveryman }: IUpdateDeliveryman) {
    const result = await this.deliveriesRepository.updateDeliveryman({
      id_delivery,
      id_deliveryman,
    });

    return result;
  }
}
