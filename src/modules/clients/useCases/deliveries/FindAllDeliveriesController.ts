import { Request, Response } from 'express';
import { FindAllDeliveryUseCase } from './FindAllDeliveriesUseCase';

export class FindAllDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_client } = request;

    const findAllDeliveryUseCase = new FindAllDeliveryUseCase();

    const deliveries = await findAllDeliveryUseCase.execute({
      id_client,
    });

    return response.json(deliveries);
  }
}
