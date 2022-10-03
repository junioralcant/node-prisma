import { DeliverymanRepositoryInMemory } from '../../in-memory/DeliverymanRepositoryInMemory';
import { CreateDeliverymanUseCase } from './CreateDeliverymanUseCase';

let deliverymanRepositoryInMemory: DeliverymanRepositoryInMemory;
let createDeliverymanUseCase: CreateDeliverymanUseCase;

describe('Create deliveryman', () => {
  beforeEach(() => {
    deliverymanRepositoryInMemory =
      new DeliverymanRepositoryInMemory();
    createDeliverymanUseCase = new CreateDeliverymanUseCase(
      deliverymanRepositoryInMemory
    );
  });

  it('should be able to create a new deliveryman', async () => {
    const deliveryman = {
      username: 'brenda',
      password: '1234',
    };

    await createDeliverymanUseCase.execute({
      username: deliveryman.username,
      password: deliveryman.password,
    });

    const deliverymanCreated =
      await deliverymanRepositoryInMemory.findByUserName(
        deliveryman.username
      );

    expect(deliverymanCreated).toHaveProperty('id');
  });

  it('should not be able to create a new deliveryman with name exist', async () => {
    expect(async () => {
      const deliveryman = {
        username: 'brenda',
        password: '1234',
      };

      await createDeliverymanUseCase.execute({
        username: deliveryman.username,
        password: deliveryman.password,
      });

      await createDeliverymanUseCase.execute({
        username: deliveryman.username,
        password: deliveryman.password,
      });
    }).rejects.toBeInstanceOf(Error);
  });
});
