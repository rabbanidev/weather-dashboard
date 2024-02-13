import { assests } from "../../assets";
import FavouriteLocation from "./FavouriteLocation";
import FavouriteList from "./FavouriteList";
import Search from "./Search";
import { useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <a href="./index.html">
          <img className="h-9" src={assests.logo} alt="Weather App" />
        </a>

        <div className="flex items-center gap-4 relative">
          <Search />
          <FavouriteLocation onShow={() => setShow(!show)} />
          {show && <FavouriteList />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
