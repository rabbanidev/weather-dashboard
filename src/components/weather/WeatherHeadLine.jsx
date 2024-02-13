import { assests } from "../../assets";
import { useWeather } from "../../hooks";
import { dateFormate } from "../../utils/date-util";

const getWeatherIcon = (climate) => {
  switch (climate) {
    case "Rain":
      return assests.headline.rainy;
    case "Clouds":
      return assests.headline.cloud;
    case "Clear":
      return assests.headline.sunny;
    case "Snow":
      return assests.headline.snow;
    case "Thunder":
      return assests.headline.thunder;
    case "Fog":
      return assests.headline.haze;
    case "Haze":
      return assests.headline.haze;
    case "Mist":
      return assests.headline.haze;

    default:
      return assests.headline.sunny;
  }
};

const WeatherHeadLine = () => {
  const { weatherData } = useWeather();
  const { location, climate, temperature, time } = weatherData;

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={assests.pin} alt="Location" />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {dateFormate(time, "time", false)} - {dateFormate(time, "date", false)}
      </p>
    </div>
  );
};

export default WeatherHeadLine;
