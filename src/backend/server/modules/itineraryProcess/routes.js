import { Router } from 'express';
import * as ItineraryController from './controller';

const routes = new Router();

routes.post('/itineraryProcess', ItineraryController.createItinerary);
routes.put('/addFlight/:id', ItineraryController.addFlight);

export default routes;
