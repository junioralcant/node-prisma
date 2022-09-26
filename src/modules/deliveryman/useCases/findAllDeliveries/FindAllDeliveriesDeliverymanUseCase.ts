import { prisma } from '../../../../database/prismaClient';

interface IFindAllDeliveryDeliveryman {
  id_deliveryman: string;
}

export class FindAllDeliveriesDeliverymanUseCase {
  async execute({ id_deliveryman }: IFindAllDeliveryDeliveryman) {
    const deliveries = await prisma.deliveryman.findMany({
      where: {
        id: id_deliveryman,
      },
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });
    return deliveries;
  }
}
