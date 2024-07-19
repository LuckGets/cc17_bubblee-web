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
  useMap,
  useMapsLibrary,
} from "@vis.gl/react-google-maps";
import { useState, useEffect, useRef } from "react";
import PlaceAutoComplete from "./PlaceAutoComplete";

import MapHandler from "./MapHandler";
import Direction from "./Direction";
import useReserveContext from "../hooks/useReserveContext";

function MapRenderer() {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");

  const [markerRef, marker] = useAdvancedMarkerRef();
  const [secondMarkerRef, secondMarker] = useAdvancedMarkerRef();
  const [open, setOpen] = useState(true);

  // const [directionService, setDirectionService] = useState(null);
  // const [directionRenderer, setDirectionRenderer] = useState(null);

  const { pickUpLatLng, dropOffLatLng, pickupLo, dropOffLo } =
    useReserveContext();

  // useEffect(() => {
  //   if (!routesLibrary) return;
  //   setDirectionService(new routesLibrary.DirectionsService());
  //   setDirectionRenderer(new routesLibrary.DirectionsRenderer({ map }));
  // }, [routesLibrary]);

  useEffect(() => {
    if (pickupLo && dropOffLo) setOpen(false);
  }, [pickupLo, dropOffLo]);

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
            <Direction />
          </Map>
          <MapHandler place={pickupLo} marker={marker} />
          <MapHandler place={dropOffLo} marker={secondMarker} />
        </div>
      </APIProvider>
    </>
  );
}

export default MapRenderer;
