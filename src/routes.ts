import { Router } from 'express';
import { AutheticateClientController } from './modules/account/authenticateClient/AutheticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateDeliverymanController } from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliveryController } from './modules/deliveries/useCases/CreateDeliveryController';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';

const routes = Router();

const createClienteController = new CreateClientController();
const authenticateClientController =
  new AutheticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();

routes.post('/client', createClienteController.handler);
routes.post(
  '/client/authenticate',
  authenticateClientController.handler
);
routes.post(
  '/deliveryman/authenticate',
  authenticateDeliverymanController.handler
);

routes.post('/deliveryman', createDeliverymanController.handler);

routes.post(
  '/delivery',
  ensureAuthenticateClient,
  createDeliveryController.handler
);

export { routes };
