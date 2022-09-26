import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../../database/prismaClient';

interface IAuthenicateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenicateDeliveryman) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error('Username or password invalid!');
    }

    const passwordMatch = await compare(
      password,
      deliveryman.password
    );

    if (!passwordMatch) {
      throw new Error('Username or password invalid!');
    }

    const deliverymanId = deliveryman.id;

    const token = sign(
      { username, deliverymanId },
      'bc7155981f37d2e86e6f23d1a82bf437',
      {
        subject: deliverymanId,
        expiresIn: '7d',
      }
    );

    return { token };
  }
}
