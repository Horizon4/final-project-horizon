import Itinerary from './model';

export const createItinerary = (req, res) => {
  const { itineraryid } = req.body;
  const newItinerary = new Itinerary({ itineraryid })

  newItinerary.save()
  .then((itinerary) => {
    return res.status(200).json({ itinerary });
  })
  .catch((err) => {
    return res.status(500).json({ error: true, message: 'Trouble adding the itinerary'});
  })
}
