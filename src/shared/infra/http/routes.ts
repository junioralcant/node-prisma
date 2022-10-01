import { Router } from 'express';
import { AutheticateClientController } from '../../../modules/account/useCases/authenticateClient/AutheticateClientController';
import { CreateClientController } from '../../../modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliverymanController } from '../../../modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { AuthenticateDeliverymanController } from '../../../modules/account/useCases/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateDeliveryController } from '../../../modules/deliveries/useCases/CreateDeliveryController';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { FindAllAvailableController } from '../../../modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';
import { UpdateDeliverymanController } from '../../../modules/deliveries/useCases/updateDeliveryman/usesCases/UpdateDeliverymanController';
import { FindAllDeliveriesController } from '../../../modules/clients/useCases/deliveries/FindAllDeliveriesController';
import { FindAllDeliveriesDeliverymanController } from '../../../modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController';
import { UpdateEndDateController } from '../../../modules/deliveryman/useCases/updateEndDate/UpdateEndDateController';

const routes = Router();

const createClienteController = new CreateClientController();
const authenticateClientController =
  new AutheticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesController = new FindAllDeliveriesController();
const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.get('/swagger', (resquest, response) => {
  return response.sendFile(process.cwd() + '/swagger.json');
});

routes.get('/docs', (resquest, response) => {
  return response.sendFile(process.cwd() + '/index.html');
});

routes.post('/client', createClienteController.handle);
routes.post(
  '/client/authenticate',
  authenticateClientController.handle
);
routes.post(
  '/deliveryman/authenticate',
  authenticateDeliverymanController.handle
);

routes.post('/deliveryman', createDeliverymanController.handle);

routes.post(
  '/delivery',
  ensureAuthenticateClient,
  createDeliveryController.handle
);

routes.get(
  '/delivery/available',
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle
);

routes.put(
  '/delivery/updateDeliveryman/:id',
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
);

routes.get(
  '/client/deliveries',
  ensureAuthenticateClient,
  findAllDeliveriesController.handle
);

routes.get(
  '/deliveryman/deliveries',
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle
);

routes.put(
  '/delivery/updateEndDate/:id',
  ensureAuthenticateDeliveryman,
  updateEndDateController.handle
);
export { routes };
