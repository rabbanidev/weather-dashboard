import { useFavourite, useLocation } from "../../hooks";

const FavouriteList = () => {
  const { favourites } = useFavourite();
  const { addSelectedLocation } = useLocation();

  const handleLocation = (locationItem) => {
    addSelectedLocation(locationItem);
  };

  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      {favourites.length > 0 ? (
        <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
          {favourites.map((fav) => (
            <li
              key={fav.location}
              className="hover:bg-gray-200"
              onClick={() => handleLocation(fav)}
            >
              {fav.location}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center">Favourite is empty!</p>
      )}
    </div>
  );
};

export default FavouriteList;
