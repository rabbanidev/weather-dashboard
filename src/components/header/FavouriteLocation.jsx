/* eslint-disable react/prop-types */

import { assests } from "../../assets";

const FavouriteLocation = ({ onShow }) => {
  return (
    <div
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
      onClick={onShow}
    >
      <img src={assests.heart} alt="Favourite" />
      <span>Favourite Locations</span>
    </div>
  );
};

export default FavouriteLocation;
