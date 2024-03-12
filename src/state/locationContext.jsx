import React, { createContext } from 'react';
import { signal } from "@preact/signals";

export const LocationContext = createContext('default');

export function LocationContextProvider() {
  const planets = signal([
    {earth: signal("Hi i'm Earth"),
    mars: signal(12),
    venus: signal(8)}
  ]);
  
  const realm = signal(["mortal", "heaven"]);

  return (
    <LocationContext.Provider
    value={{
        planets,
        realm,
    }}>
    </LocationContext.Provider>
  )
//   return { planets, realm };
}

export default LocationContextProvider