import { hash } from 'bcrypt';
import { DeliverymanRepository } from '../../infra/prisma/repositories/DeliverymanRepository';

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  constructor(
    private deliverymanRepository = new DeliverymanRepository()
  ) {}
  async execute({ username, password }: ICreateDeliveryman) {
    const deliverymanExist =
      await this.deliverymanRepository.findByUserName(username);

    if (deliverymanExist) {
      throw new Error('Deliveryman already exists.');
    }

    const hashPassword = await hash(password, 10);

    const deliveryman = this.deliverymanRepository.create({
      username,
      password: hashPassword,
    });

    return deliveryman;
  }
}
