import { FindAllDeliveriesDeliverymanUseCase } from './FindAllDeliveriesDeliverymanUseCase';
import { DeliverymanRepositoryInMemory } from '../../in-memory/DeliverymanRepositoryInMemory';

let findAllDeliveriesDeliverymanUseCase: FindAllDeliveriesDeliverymanUseCase;
let deliverymanRepositoryInMemory: DeliverymanRepositoryInMemory;

describe('List all deliveryman deliveries', () => {
  beforeEach(() => {
    deliverymanRepositoryInMemory =
      new DeliverymanRepositoryInMemory();
    findAllDeliveriesDeliverymanUseCase =
      new FindAllDeliveriesDeliverymanUseCase(
        deliverymanRepositoryInMemory
      );
  });

  it('should be able to get all deliveryman deliveries', async () => {
    await deliverymanRepositoryInMemory.create({
      username: 'junior',
      password: '123',
    });

    const deliveryman =
      await deliverymanRepositoryInMemory.findByUserName('junior');

    const deliveries =
      await findAllDeliveriesDeliverymanUseCase.execute({
        id_deliveryman: deliveryman.id as string,
      });

    expect(deliveries.length).toBe(1);
  });
});
