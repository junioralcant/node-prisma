import { Request, Response } from 'express';
import { CreateDeliveryUseCases } from './CreateDeliveryUseCases';

export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { item_name } = request.body;
    const { id_client } = request;

    const createDeliveryUseCase = new CreateDeliveryUseCases();

    const delivery = await createDeliveryUseCase.execute({
      id_client,
      item_name,
    });

    return response.json(delivery);
  }
}
