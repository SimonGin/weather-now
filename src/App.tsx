import { IoSettingsOutline } from "react-icons/io5";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import TodayForecastCard from "./components/TodayForecastCard";
import StatCard from "./components/StatCard";
import DailyForecastCard from "./components/DailyForecastCard";

const App = () => {
  return (
    <div className="bg-[#02012B] h-full p-20 text-white">
      <div>
        <div className="flex flex-row justify-between">
          <img src="logo.svg" alt="" />
          <button className="bg-gray-700 w-32 rounded-xl flex items-center justify-between px-4">
            <IoSettingsOutline size={20} />
            <h1 className="font-medium">Units</h1>
            <FaChevronDown />
          </button>
        </div>
        <h1 className="text-6xl font-bold text-center my-10">
          How's the sky looking today?
        </h1>
        <div className="flex justify-center gap-4 my-10">
          {/* Search Bar */}
          <div className="flex flex-row items-center gap-3 w-2xl bg-gray-700 px-4 py-3 rounded-xl">
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
        <div className="flex gap-10">
          <div className="flex-6">
            <TodayForecastCard
              degree={24}
              location="Saigon, Vietnam"
              dmy="Friday, Apr 3, 2026"
            />
            <div className="grid grid-flow-col grid-cols-4 gap-8 my-10">
              <StatCard title="Feels like" value="24°" />
              <StatCard title="Humidity" value="46%" />
              <StatCard title="Wind" value="14 km/h" />
              <StatCard title="Precipitation" value="0 mm" />
            </div>
            <h1 className="my-3 text-2xl font-medium">Daily forecast</h1>
            <div className="grid grid-flow-col grid-cols-7 gap-5 my-5">
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
          {/* Hourly Forecase Section */}
          <div className="flex-3"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
