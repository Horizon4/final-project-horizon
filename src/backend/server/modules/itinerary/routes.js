import { Router } from 'express';
import * as ItineraryController from './controller'

const routes = new Router();

routes.post('/createItinerary', ItineraryController.createItinerary);
routes.put('/selected', ItineraryController.selected);
routes.get('/completed/:username', ItineraryController.completedItinerary);
routes.put('/updateRating', ItineraryController.updateRating);
routes.put('/updateRecommendations', ItineraryController.updateRecommendations);

export default routes;
