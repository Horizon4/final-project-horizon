import { Router } from 'express';
import * as UserController from './controller';

const routes = new Router();

routes.put('/user', UserController.createUser);
routes.post('/signin', UserController.signInUser);

export default routes;
