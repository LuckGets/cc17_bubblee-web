import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import { useState, useEffect } from "react";
import useReserveContext from "../hooks/useReserveContext";
import { useContext } from "react";
import { GoogleContext } from "../context/GoogleContext";

const Direction = () => {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionService, setDirectionService] = useState(null);
  const [directionRenderer, setDirectionRenderer] = useState(null);

  useEffect(() => {
    if (!map || !routesLibrary) return;
    setDirectionService(new routesLibrary.DirectionsService());
    setDirectionRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [map, routesLibrary]);

  const { setDistance, setDuration, pickUpLatLng, dropOffLatLng } =
    useReserveContext();

  const execute = async () => {
    console.log("Before start");
    if (
      !directionService ||
      !directionRenderer ||
      !pickUpLatLng ||
      !dropOffLatLng
    )
      return;
    console.log("hello");
    console.log(pickUpLatLng);
    console.log(dropOffLatLng);
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
    // .then((response) => {
    //   console.log(response);
    //   directionRenderer.setDirections(response);
    //   setDuration(response.routes[0]?.legs[0].duration.value * 1000);
    //   setDistance(response.routes[0]?.legs[0].distance.text);
    // });
    directionRenderer.setDirections(response);
    console.log(response);
    if (!response) return;
    setDistance(response.routes[0]?.legs[0].distance.text);
    setDuration(response.routes[0]?.legs[0].duration.value * 1000);
  };

  useEffect(() => {
    execute();
  }, [pickUpLatLng, dropOffLatLng]);
  return null;
};

export default Direction;
