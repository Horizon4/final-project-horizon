import Itinerary from './model';

export const createItinerary = (req, res) => {
  const { flights, stopoverCount } = req.body;
  const newItinerary = new Itinerary({ flights, stopoverCount })

  newItinerary.save()
  .then((itinerary) => {
    return res.status(200).json({ itinerary });
  })
  .catch((err) => {
    return res.status(500).json({ error: err, message: 'Trouble adding the itinerary'});
  })
}
