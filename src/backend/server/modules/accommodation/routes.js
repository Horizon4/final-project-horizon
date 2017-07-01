import { Router } from 'express';
import * as AccommodationController from './controller'

const routes = new Router();

routes.post('/accommodation', AccommodationController.createAccommodation);
routes.get('/findAccommodation/:id',
            AccommodationController.findAccommodation);

export default routes;
