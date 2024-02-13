/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

import { createContext } from "react";
import { useLocalStorage } from "../hooks";

export const FavouriteContext = createContext([]);

export default function FavouriteProvider({ children }) {
  const [favourites, setFavourites] = useLocalStorage("favourites", []);

  const addToFavourite = ({ latitude, longitude, location }) => {
    setFavourites([...favourites, { latitude, longitude, location }]);
  };

  const removeFromFavourite = (location) => {
    setFavourites(favourites.filter((f) => f.location !== location));
  };

  return (
    <FavouriteContext.Provider
      value={{
        favourites,
        addToFavourite,
        removeFromFavourite,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}
