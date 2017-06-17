import { Router } from 'express';
import * as ItineraryController from './controller';

const routes = new Router();

routes.post('/itinerary', ItineraryController.createItinerary);

export default routes;
