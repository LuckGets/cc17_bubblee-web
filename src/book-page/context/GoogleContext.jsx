import { useMap, useMapsLibrary, APIProvider } from "@vis.gl/react-google-maps";
import { createContext, useState, useEffect } from "react";
import useReserveContext from "../hooks/useReserveContext";

export const GoogleContext = createContext();

function GoogleContextProvider({ children }) {
  const map = useMap();
  const [directionService, setDirectionService] = useState(null);
  const [directionRenderer, setDirectionRenderer] = useState(null);
  const routesLibrary = useMapsLibrary("routes");

  const { setDistance, setDuration, pickUpLatLng, dropOffLatLng } =
    useReserveContext();

  useEffect(() => {
    if (!map || !routesLibrary) return;
    setDirectionService(new routesLibrary.DirectionsService());
    setDirectionRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [map, routesLibrary]);

  const handleCalculateDistance = async () => {
    try {
      console.log("Click handle");
      console.log(directionService);
      console.log(directionRenderer);
      if (
        !directionService ||
        !directionRenderer ||
        !pickUpLatLng ||
        !dropOffLatLng
      )
        return;
      const response = await directionService.route({
        origin: {
          lat: +pickUpLatLng.split(" ")[0],
          lng: +pickUpLatLng.split(" ")[1],
        },
        destination: {
          lat: +dropOffLatLng.split(" ")[0],
          lng: +dropOffLatLng.split(" ")[1],
        },
        travelMode: google.maps.TravelMode.DRIVING,
      });
      console.log(response);
      setDistance(response.routes[0]?.legs[0].distance.text);
      setDuration(response.routes[0]?.legs[0].duration.value * 1000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <GoogleContext.Provider value={{ handleCalculateDistance }}>
      {children}
    </GoogleContext.Provider>
  );
}

export default GoogleContextProvider;
