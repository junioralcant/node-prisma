import { v4 as uuid } from 'uuid';
import { DeliveriesRepositoryInMemory } from '../../../in-memory/DeliveriesRepositoryInMemory';
import { UpdateDeliverymanUseCase } from './UpdateDeliverymanUseCase';

let deliveriesRepositoryInMemory: DeliveriesRepositoryInMemory;
let updateDeliverymanUseCase: UpdateDeliverymanUseCase;

describe('Update delivery', () => {
  beforeEach(() => {
    deliveriesRepositoryInMemory = new DeliveriesRepositoryInMemory();
    updateDeliverymanUseCase = new UpdateDeliverymanUseCase(
      deliveriesRepositoryInMemory
    );
  });

  it('Update deliveryman  in delivery', async () => {
    const createdelivery = await deliveriesRepositoryInMemory.create({
      id_client: uuid(),
      item_name: 'Mochila',
    });

    const updatedelivery = await updateDeliverymanUseCase.execute({
      id_delivery: String(createdelivery.id),
      id_deliveryman: uuid(),
    });

    expect(typeof updatedelivery.id_deliveryman).toBe('string');
  });
});
