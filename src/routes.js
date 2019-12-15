import { Router } from 'express';

//Controllers
import UserController from './app/controllers/UserController';
import LoginController from './app/controllers/LoginController';
import ToolsController from './app/controllers/ToolsController';
//Middlewares
import LoginMiddleware from './app/middlewares/LoginMiddleware';
const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/login', LoginController.store);

routes.use(LoginMiddleware);

routes.post('/tools', ToolsController.store);
routes.get('/tools', ToolsController.index);
routes.delete('/tools/:id', ToolsController.delete);

export default routes;
