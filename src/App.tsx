import { IoSettingsOutline } from "react-icons/io5";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import TodayForecastCard from "./components/TodayForecast";

const App = () => {
  return (
    <div className="bg-[#02012B] h-screen p-20 text-white">
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
          </div>
          {/* Hourly Forecase Section */}
          <div className="flex-3"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
