import { DeliveriesRepository } from '../../infra/prisma/repositores/DeliveriesRepository';

export class FindAllAvailableUseCase {
  constructor(
    private deliveriesRepository = new DeliveriesRepository()
  ) {}

  async execute() {
    const deliveries =
      await this.deliveriesRepository.findAllAvailable();

    return deliveries;
  }
}
