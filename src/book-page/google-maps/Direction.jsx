import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useState, useEffect } from "react";
import useReserveContext from "../hooks/useReserveContext";

const Direction = ({ origin, dest }) => {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionService, setDirectionService] = useState(null);
  const [directionRenderer, setDirectionRenderer] = useState(null);

  const {
    setDistance,
    setDuration,
    setEstimatedFinishTime,
    distance,
    duration,
  } = useReserveContext();

  const [route, setRoute] = useState([]);

  useEffect(() => {
    if (!map || !routesLibrary) return;
    setDirectionService(new routesLibrary.DirectionsService());
    setDirectionRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [map, routesLibrary]);

  useEffect(() => {
    if (!directionService || !directionRenderer) return;
    if (duration || distance) return;
    directionService
      .route({
        origin: origin,
        destination: dest,
        travelMode: google.maps.TravelMode.DRIVING,
      })
      .then((response) => {
        directionRenderer.setDirections(response);
        setRoute(response.routes);
      });
    setDuration(route[0]?.legs[0].duration.value * 1000);
    setDistance(route[0]?.legs[0].distance.text);
  }, [origin, dest]);

  return null;
};

export default Direction;
