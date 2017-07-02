import { Router } from 'express';
import * as AccommodationController from './controller'

const routes = new Router();

routes.put('/findAccommodation/:id', AccommodationController.findAccommodation);

export default routes;
