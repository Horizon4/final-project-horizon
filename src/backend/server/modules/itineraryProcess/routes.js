import { Router } from 'express';
import * as ItineraryProcessController from './controller';

const routes = new Router();

routes.post('/itineraryProcess', ItineraryProcessController.createItineraryProcess);
routes.put('/addFlight/:id', ItineraryProcessController.addFlight);

export default routes;
