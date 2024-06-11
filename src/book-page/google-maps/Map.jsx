import React from "react";
import {
  APIProvider,
  Map,
  Pin,
  AdvancedMarker,
  InfoWindow,
  useMap,
  useMapsLibrary,
  MapControl,
  useAdvancedMarkerRef,
  ControlPosition,
} from "@vis.gl/react-google-maps";
import { useState, useEffect, useRef } from "react";

// const Direction = () => {
//   const map = useMap();
//   const routesLibrary = useMapsLibrary("routes");
//   const [directionService, setDirectionService] = useState();
//   const [directionRenderer, setDirectionRenderer] = useState();
//   const [routes, setRoutes] = useState([]);

//   return;
// };

function MapRenderer() {
  const center = { lat: 13.746389, lng: 100.535004 };
  const [open, setOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();

  const [selectedPlace, setSelectedPlace] = useState(null);

  return (
    <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
      <div className="map-container">
        <Map
          mapId={import.meta.env.VITE_MAPS_ID}
          defaultCenter={center}
          defaultZoom={12}
          gestureHandling="greedy"
        >
          <AdvancedMarker ref={markerRef} position={center}>
            <Pin />
          </AdvancedMarker>
        </Map>
        <MapControl position={ControlPosition.TOP}>
          <div className="m-10 w-full bg-white">
            <PlaceAutoComplete onPlaceSelect={setSelectedPlace} />
          </div>
        </MapControl>
        <MapHandler place={selectedPlace} marker={marker} />
      </div>
    </APIProvider>
  );
}

const MapHandler = ({ place, marker }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !place || !marker) return;

    if (place.geometry?.viewport) {
      map.fitBounds(place.geometry?.viewport);
    }

    marker.position = place.geometry?.location;
  }, [map, place, marker]);
  return null;
};

const PlaceAutoComplete = ({ onPlaceSelect }) => {
  const [placeAutoComplete, setPlaceAutoComplete] = useState(null);
  const inputRef = useRef(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const options = {
      fields: ["geometry", "name", "formatted_address"],
    };

    setPlaceAutoComplete(new places.Autocomplete(inputRef.current, options));
  }, [places]);

  useEffect(() => {
    if (!placeAutoComplete) return;
    placeAutoComplete.addListener("place_changed", () => {
      onPlaceSelect(placeAutoComplete.getPlace());
    });
  }, [onPlaceSelect, placeAutoComplete]);

  return (
    <div className="gap-2">
      <h1 className="text-lg">Pick up :</h1>
      <div className="border-2 border-black w-full">
        <input className="w-full h-[40px] py-[12px] text-xl" ref={inputRef} />
      </div>
    </div>
  );
};

export default MapRenderer;
