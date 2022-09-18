import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { prisma } from '../../../database/prismaClient';

interface IAuthenicateClient {
  username: string;
  password: string;
}

export class AuthencateClientUseCase {
  async execute({ username, password }: IAuthenicateClient) {
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });

    if (!client) {
      throw new Error('Username or password invalid!');
    }

    const passwordMatch = await compare(password, client.password);

    if (!passwordMatch) {
      throw new Error('Username or password invalid!');
    }

    const clienteId = client.id;

    const token = sign(
      { username, clienteId },
      'bc7177981f37d2e86e6f23d1a82bf437',
      {
        subject: clienteId,
        expiresIn: '7d',
      }
    );

    return token;
  }
}
