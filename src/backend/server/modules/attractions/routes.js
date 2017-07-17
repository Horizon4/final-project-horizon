import { Router } from 'express';
import * as AttractionController from './controller';

const routes = new Router();

routes.put('/findAttraction/:id', AttractionController.findAttraction);

export default routes;
