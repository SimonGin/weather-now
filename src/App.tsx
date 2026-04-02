import { IoSettingsOutline } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";

const App = () => {
  return (
    <div className="bg-[#02012B] h-screen p-20 text-white">
      <div>
        <div className="flex flex-row justify-between">
          <img src="logo.svg" alt="" />
          <button className="bg-gray-700 w-32 rounded-xl flex items-center justify-between px-4">
            <IoSettingsOutline size={20} />
            <h1 className="font-semibold">Units</h1>
            <FaChevronDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
