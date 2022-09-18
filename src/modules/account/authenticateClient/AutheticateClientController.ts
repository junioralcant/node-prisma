import { Request, Response } from 'express';
import { AuthencateClientUseCase } from './AutrenticateClientUseCase';

export class AutheticateClientController {
  async handler(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateClientUseCase = new AuthencateClientUseCase();

    const result = await authenticateClientUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}
