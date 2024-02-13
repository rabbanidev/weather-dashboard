import { assests } from "../../assets";
import { useFavourite, useWeather } from "../../hooks";

const ToggleFavourite = () => {
  const { weatherData } = useWeather();
  const { location, latitude, longitude } = weatherData;

  const { favourites, addToFavourite, removeFromFavourite } = useFavourite();

  // exiting favourite location
  const favFound = favourites.find((favItem) => favItem.location === location);

  // toggle favourite handler
  const handleFavourite = () => {
    if (favFound) {
      removeFromFavourite(location);
    } else {
      addToFavourite({ latitude, longitude, location });
    }
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
          onClick={handleFavourite}
        >
          <span>Add to Favourite</span>
          <img
            src={favFound ? assests.heartRed : assests.heart}
            alt="Favourite"
          />
        </button>
      </div>
    </div>
  );
};

export default ToggleFavourite;
