import { IoSettingsOutline } from "react-icons/io5";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import TodayForecastCard from "./components/TodayForecastCard";
import StatCard from "./components/StatCard";
import DailyForecastCard from "./components/DailyForecastCard";
import HourlyForecastCard from "./components/HourlyForecastCard";

const App = () => {
  return (
    <div className="bg-[#02012B] w-screen p-4 lg:p-20 text-white">
      <div className="flex flex-row justify-between">
        <img src="logo.svg" alt="" className="w-40 lg:w-60" />
        <button className="bg-gray-700 w-32 rounded-lg lg:rounded-xl flex items-center justify-between px-4">
          <IoSettingsOutline size={20} />
          <h1 className="font-medium">Units</h1>
          <FaChevronDown />
        </button>
      </div>
      <h1 className="text-6xl font-bold text-center my-20 lg:my-10">
        How's the sky looking today?
      </h1>
      <div className="flex flex-col lg:flex-row justify-center gap-4 my-10 lg:mx-76">
        {/* Search Bar */}
        <div className="flex flex-1 flex-row items-center gap-3 bg-gray-700 px-4 py-3 rounded-xl">
          <FaSearch />
          <input
            className="w-full focus:outline-none"
            type="text"
            placeholder="Search for a place..."
          />
        </div>
        <button className="bg-[#4757DA] px-4 py-3 rounded-xl font-medium ">
          Search
        </button>
      </div>
      {/* Body */}
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex-6">
          <TodayForecastCard
            degree={24}
            location="Saigon, Vietnam"
            dmy="Friday, Apr 3, 2026"
          />
          <div className="grid lg:grid-flow-col grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-8 my-5 lg:my-10">
            <StatCard title="Feels like" value="24°" />
            <StatCard title="Humidity" value="46%" />
            <StatCard title="Wind" value="14 km/h" />
            <StatCard title="Precipitation" value="0 mm" />
          </div>
          <h1 className="my-3 text-2xl font-medium">Daily forecast</h1>
          <div className="grid lg:grid-flow-col grid-cols-3 lg:grid-cols-7 gap-3 lg:gap-5 my-5">
            <DailyForecastCard
              day="Thu"
              iconImg="/icon-rain.webp"
              high={24}
              low={20}
            />
            <DailyForecastCard
              day="Fri"
              iconImg="/icon-overcast.webp"
              high={24}
              low={20}
            />
            <DailyForecastCard
              day="Sat"
              iconImg="/icon-snow.webp"
              high={24}
              low={20}
            />
            <DailyForecastCard
              day="Sun"
              iconImg="/icon-storm.webp"
              high={24}
              low={20}
            />
            <DailyForecastCard
              day="Mon"
              iconImg="/icon-overcast.webp"
              high={24}
              low={20}
            />
            <DailyForecastCard
              day="Tue"
              iconImg="/icon-sunny.webp"
              high={24}
              low={20}
            />
            <DailyForecastCard
              day="Wed"
              iconImg="/icon-partly-cloudy.webp"
              high={24}
              low={20}
            />
          </div>
        </div>
        {/* Hourly Forecast Section */}
        <div className="flex-3">
          <div className="max-h-210 p-4 lg:p-8 bg-[#25253F] rounded-2xl">
            <div className="flex items-center">
              <h1 className="text-lg lg:text-2xl font-medium">
                Hourly forecast
              </h1>
              <button className="bg-[#3D3B5D] flex items-center gap-2 ml-auto justify-center px-4 py-2 rounded-xl">
                <h3 className="text-lg lg:text-xl">Friday</h3>
                <FaChevronDown />
              </button>
            </div>
            <div className="max-h-175 flex flex-1 flex-col gap-5 mt-5 overflow-y-auto">
              {Array.from({ length: 24 }).map((_, index) => (
                <HourlyForecastCard
                  key={index}
                  iconImg="/icon-sunny.webp"
                  time="3 PM"
                  degree={20}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
