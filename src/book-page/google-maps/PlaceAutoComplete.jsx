import { useMapsLibrary } from "@vis.gl/react-google-maps";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

const PlaceAutoComplete = ({
  onPlaceSelect,
  placeholder,
  place,
  className,
}) => {
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
    <div className={`w-full gap-2 ${className}`}>
      <input
        className={`border-none w-full h-[2rem] py-5 px-2 text-md`}
        ref={inputRef}
        value={place}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
};

export default PlaceAutoComplete;
