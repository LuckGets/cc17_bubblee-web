import { useMapsLibrary } from "@vis.gl/react-google-maps";
import React from "react";

function geocoding(request) {
  const geocoder = useMapsLibrary("geocoding");
  geocoder
    .geocode(request)
    .then((response) => {
      const { results } = response;
      return results;
    })
    .catch((err) => console.log(err));
}

export default geocoding;
