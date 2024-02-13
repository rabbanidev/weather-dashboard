import { useContext } from "react";
import { FavouriteContext } from "../contexts";

const useFavourite = () => {
  return useContext(FavouriteContext);
};

export default useFavourite;
