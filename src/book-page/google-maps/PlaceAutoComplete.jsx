import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const PlaceAutoComplete = ({ onPlaceSelect, title }) => {
  const [placeAutoComplete, setPlaceAutoComplete] = useState(null);
  const inputRef = useRef(null);
  const places = useMapsLibrary("places");

  useEffect(() => {
    if (!places || !inputRef.current) return;

    const option = {
      fields: ["geometry", "name", "formatted_address"],
    };
    setPlaceAutoComplete(new places.Autocomplete(inputRef.current, option));
  }, [places]);

  useEffect(() => {
    if (!placeAutoComplete) return;
    placeAutoComplete.addListener("place_changed", () => {
      onPlaceSelect(placeAutoComplete.getPlace());
    });
  }, [onPlaceSelect, placeAutoComplete]);

  return (
    <div className="width-[4rem] gap-2">
      <input
        className="border-2 border-black w-full h-[2rem] py-[12px] text-xl"
        ref={inputRef}
        type="text"
      />
    </div>
  );
};

export default PlaceAutoComplete;
