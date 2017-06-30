import { Router } from 'express';
import * as ItineraryController from './controller';

const routes = new Router();

routes.put('/itinerary', ItineraryController.createItinerary);
routes.put('/addFlight/:id', ItineraryController.addFlight);

export default routes;
