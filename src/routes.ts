import { Router } from 'express';
import { AutheticateClientController } from './modules/account/authenticateClient/AutheticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';

const routes = Router();

const createClienteController = new CreateClientController();
const authenticateClientController =
  new AutheticateClientController();
const createDeliverymanController = new CreateDeliverymanController();

routes.post('/client', createClienteController.handler);
routes.post('/authenticate', authenticateClientController.handler);
routes.post('/deliveryman', createDeliverymanController.handler);

export { routes };
