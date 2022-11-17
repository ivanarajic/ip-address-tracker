import React, { useContext } from "react";
import { AppContext } from "../store/AppContext";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

function Map() {
  const trackCtx = useContext(AppContext);
  let locationIcon = L.icon({
    iconUrl: "./icon-location.svg",
  });

  const position = trackCtx.location;

  return (
    <MapContainer
      key={position}
      center={position}
      zoom={15}
      className="h-full w-full"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={locationIcon} />
    </MapContainer>
  );
}

export default Map;
