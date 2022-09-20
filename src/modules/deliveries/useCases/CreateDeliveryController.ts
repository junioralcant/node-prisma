import { Request, Response } from 'express';
import { CreateDeliveryUseCases } from './CreateDeliveryUseCases';

export class CreateDeliveryController {
  async handler(request: Request, response: Response) {
    const { id_client, item_name } = request.body;

    const createDeliveryUseCase = new CreateDeliveryUseCases();

    const delivery = await createDeliveryUseCase.execute({
      id_client,
      item_name,
    });

    return response.json(delivery);
  }
}
