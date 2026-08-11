"use client";

import { createContext, useState, useContext } from "react";

// 1. Create the context
const MapContext = createContext();

// 2. Create a custom hook for easier usage
export function useMapContext() {
  return useContext(MapContext);
}

// 3. Create the provider component
export function MapContextProvider({ children }) {
  const [mapLocation, setMapLocation] = useState("Nagpur");

  return (
    <MapContext.Provider value={{ mapLocation, setMapLocation }}>
      {children}
    </MapContext.Provider>
  );
}
