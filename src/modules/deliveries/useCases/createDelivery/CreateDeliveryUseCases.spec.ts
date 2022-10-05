import { v4 as uuid } from 'uuid';

import { DeliveriesRepositoryInMemory } from '../../in-memory/DeliveriesRepositoryInMemory';
import { CreateDeliveryUseCases } from './CreateDeliveryUseCases';

let deliveriesRepositoryInMemory: DeliveriesRepositoryInMemory;
let createDeliveryUseCase: CreateDeliveryUseCases;

describe('Create delivery', () => {
  beforeEach(() => {
    deliveriesRepositoryInMemory = new DeliveriesRepositoryInMemory();
    createDeliveryUseCase = new CreateDeliveryUseCases(
      deliveriesRepositoryInMemory
    );
  });

  it('should be able to create a new delivery', async () => {
    const delivery = await createDeliveryUseCase.execute({
      id_client: uuid(),
      item_name: 'Mochila',
    });

    expect(delivery).toHaveProperty('id');
  });
});
