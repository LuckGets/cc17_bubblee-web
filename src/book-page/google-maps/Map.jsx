import React from "react";
import {
  APIProvider,
  Map,
  Pin,
  AdvancedMarker,
  MapControl,
  useAdvancedMarkerRef,
  ControlPosition,
  useApiIsLoaded,
} from "@vis.gl/react-google-maps";
import { useState, useEffect, useRef } from "react";
import PlaceAutoComplete from "./PlaceAutoComplete";

import MapHandler from "./MapHandler";
import Direction from "./Direction";
import useReserveContext from "../hooks/useReserveContext";

function MapRenderer({ pickup, dropoff }) {
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [secondMarkerRef, secondMarker] = useAdvancedMarkerRef();
  const [open, setOpen] = useState(true);

  const { pickUpLatLng, dropOffLatLng } = useReserveContext();

  useEffect(() => {
    if (pickup && dropoff) setOpen(false);
  }, [pickup, dropoff]);

  return (
    <>
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_API}>
        <div className="map-container">
          <p className="bg-black text-white p-3 text-lg">Map summary</p>
          <Map
            mapId={import.meta.env.VITE_MAPS_ID}
            defaultCenter={{ lat: 13.746389, lng: 100.535004 }}
            defaultZoom={11}
            gestureHandling="greedy"
            reuseMaps={true}
            disableDefaultUI={true}
          >
            {open && (
              <>
                <AdvancedMarker ref={markerRef}>
                  <Pin />
                </AdvancedMarker>
                <AdvancedMarker ref={secondMarkerRef}>
                  <Pin />
                </AdvancedMarker>
              </>
            )}
            <Direction
              origin={
                {
                  lat: pickup?.geometry.location.lat(),
                  lng: pickup?.geometry.location.lng(),
                } || null
              }
              dest={
                {
                  lat: dropoff?.geometry.location.lat(),
                  lng: dropoff?.geometry.location.lng(),
                } || null
              }
            />
          </Map>
          <MapHandler place={pickup || pickUpLatLng} marker={marker} />
          <MapHandler place={dropoff || dropOffLatLng} marker={secondMarker} />
        </div>
      </APIProvider>
    </>
  );
}

// const MapHandler = ({ place, marker }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (!map || !place || !marker) return;

//     if (place.geometry?.viewport) {
//       map.fitBounds(place.geometry?.viewport);
//     }

//     marker.position = place.geometry?.location;
//   }, [map, place, marker]);
//   return null;
// };

// const PlaceAutoComplete = ({ onPlaceSelect }) => {
//   const [placeAutoComplete, setPlaceAutoComplete] = useState(null);
//   const inputRef = useRef(null);
//   const places = useMapsLibrary("places");

//   useEffect(() => {
//     if (!places || !inputRef.current) return;

//     const options = {
//       fields: ["geometry", "name", "formatted_address"],
//     };

//     setPlaceAutoComplete(new places.Autocomplete(inputRef.current, options));
//   }, [places]);

//   useEffect(() => {
//     if (!placeAutoComplete) return;
//     placeAutoComplete.addListener("place_changed", () => {
//       onPlaceSelect(placeAutoComplete.getPlace());
//     });
//   }, [onPlaceSelect, placeAutoComplete]);

//   return (
//     <div className="gap-2">
//       <h1 className="text-lg">Pick up :</h1>
//       <div className="border-2 border-black w-full">
//         <input className="w-full h-[40px] py-[12px] text-xl" ref={inputRef} />
//       </div>
//     </div>
//   );
// };

export default MapRenderer;
