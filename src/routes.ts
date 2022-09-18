import { Router } from 'express';
import { AutheticateClientController } from './modules/account/authenticateClient/AutheticateClientController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';

const routes = Router();

const createClienteController = new CreateClientController();
const authenticateClientController =
  new AutheticateClientController();

routes.post('/client', createClienteController.handler);
routes.post('/authenticate', authenticateClientController.handler);

export { routes };
