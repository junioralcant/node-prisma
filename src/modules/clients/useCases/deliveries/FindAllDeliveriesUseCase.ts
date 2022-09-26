import { prisma } from '../../../../database/prismaClient';

interface IFindAllDelivery {
  id_client: string;
}

export class FindAllDeliveryUseCase {
  async execute({ id_client }: IFindAllDelivery) {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: id_client,
      },
      include: {
        deliveries: true,
      },
    });
    return deliveries;
  }
}
