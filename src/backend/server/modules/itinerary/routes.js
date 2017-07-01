import { Router } from 'express';
import * from ItineraryController from './controller'

const routes = new Router();

routes.post('/createItinerary', ItineraryController.createItinerary);

export default routes;
