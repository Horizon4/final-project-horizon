import { Router } from 'express';
import * as ItineraryController from './controller'

const routes = new Router();

routes.put('/flight', ItineraryController.createFlight);
routes.get('/flight', ItineraryController.getAllFlights);

export default routes;
