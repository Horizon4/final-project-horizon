import { Router } from 'express';
import * as FlightController from './controller'

const routes = new Router();

routes.put('/flight', FlightController.createFlight);
routes.get('/flight/:id', FlightController.getFlight);
routes.get('/findFlights/:id',
            FlightController.getFlight,
            FlightController.buildFlightRequest,
            FlightController.findFlights
          );

export default routes;
