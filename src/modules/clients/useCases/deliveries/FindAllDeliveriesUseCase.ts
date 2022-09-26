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
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });
    return deliveries;
  }
}
