import { v4 as uuid } from 'uuid';

import { DeliveriesRepositoryInMemory } from '../../in-memory/DeliveriesRepositoryInMemory';
import { CreateDeliveryUseCases } from '../createDelivery/CreateDeliveryUseCases';

let deliveriesRespositoryInMemory: DeliveriesRepositoryInMemory;
let createDeliveryUseCases: CreateDeliveryUseCases;

describe('Find deliveries', () => {
  beforeEach(() => {
    deliveriesRespositoryInMemory =
      new DeliveriesRepositoryInMemory();
    createDeliveryUseCases = new CreateDeliveryUseCases(
      deliveriesRespositoryInMemory
    );
  });

  it('should return all deliveries available', async () => {
    const createDelivery = await deliveriesRespositoryInMemory.create(
      {
        id_client: uuid(),
        item_name: 'Mochila',
      }
    );

    const createDelivery2 =
      await deliveriesRespositoryInMemory.create({
        id_client: uuid(),
        item_name: 'Mouse',
      });
  });
});
