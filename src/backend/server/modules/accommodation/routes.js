import { Router } from 'express';
import * as AccommodationController from './controller'

const routes = new Router();

routes.get('/accommodation/:id', AccommodationController.getAccommodation);

export default routes;
