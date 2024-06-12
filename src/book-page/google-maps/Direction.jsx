import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useState, useEffect } from "react";

const Direction = ({ origin, dest }) => {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionService, setDirectionService] = useState(null);
  const [directionRenderer, setDirectionRenderer] = useState(null);

  const [route, setRoute] = useState([]);

  useEffect(() => {
    if (!map || !routesLibrary) return;
    setDirectionService(new routesLibrary.DirectionsService());
    setDirectionRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [map, routesLibrary]);

  useEffect(() => {
    if (!directionService || !directionRenderer) return;

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
    console.log(route);
  }, [directionRenderer, directionService, origin, dest]);

  return null;
};

export default Direction;
