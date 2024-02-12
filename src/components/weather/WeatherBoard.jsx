import { useWeather } from "../../contexts/WeatherContext";
import AddToFavourite from "./AddToFavourite";
import WeatherCondition from "./WeatherCondition";
import WeatherHeadLine from "./WeatherHeadLine";

const WeatherBoard = () => {
  const { loading, error } = useWeather();

  // ddecided what to render
  let content = null;
  if (loading.state) {
    content = <p className="mt-32 text-3xl">{loading.message}</p>;
  } else if (!loading.state && error) {
    content = (
      <p className="mt-32 text-3xl">
        {error.message || "Something went wrong!"}
      </p>
    );
  } else {
    content = (
      <div className="grid md:grid-cols-2 gap-10 md:gap-6">
        <AddToFavourite />
        <WeatherHeadLine />
        <WeatherCondition />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
        {content}
      </div>
    </div>
  );
};

export default WeatherBoard;
