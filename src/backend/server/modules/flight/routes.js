import { Router } from 'express';
import * as FlightController from './controller'

const routes = new Router();

routes.put('/flight', FlightController.createFlight);
routes.get('/flight/:id', FlightController.getFlight);
routes.get('/flights', FlightController.getAllFlights);
routes.get('/findOneWayFlights/:id',
            FlightController.getFlight,
            FlightController.buildOneWayFlightRequest,
            FlightController.findFlights
          );
routes.get('/findRoundTripFlights/:id',
            FlightController.getFlight,
            FlightController.buildRoundTripFlightRequests,
            FlightController.findFlights);
routes.get('/findMultiCityFlights/:id',
            FlightController.getFlight,
            FlightController.buildMultiCityFlightRequests,
            FlightController.findFlights);

export default routes;
