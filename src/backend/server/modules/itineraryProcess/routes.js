import { Router } from 'express';
import * as ItineraryProcessController from './controller';

const routes = new Router();

routes.post('/itineraryProcess', ItineraryProcessController.createItineraryProcess);
routes.put('/addFlight/:id', ItineraryProcessController.addFlight);
routes.get('/uncompleted/:username', ItineraryProcessController.uncompletedProcess);

export default routes;
