import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";
import { GrFormNext } from "react-icons/gr";

function HotelSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="absolute ">
        {/* <FontAwesomeIcon icon={faTimes} className="" onClick={toggleSidebar} /> */}
      </div>

      <button
        className="md:hidden absolute mt- bg-blue- w-52 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={toggleSidebar}
      >
        Show Filters
      </button>

      <div
        className={`absolute md:relative z-30 md:z-auto ${
          isSidebarOpen ? "block" : "hidden"
        } md:block bg-white w-full md:w-1/4 p-4 shadow-lg md:shadow-none`}
      >
        <h2 className="font-bold text-lg mb-4">Filters</h2>
        <div className="space-y-3">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              placeholder="Enter location"
              className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            />
          </div>
          <div className="space-y-3">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Price Range
            </label>
            <select className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option>1000-2000</option>
              <option>2000-4000</option>
              <option>4000-6500 </option>
              <option>6500-8000</option>
              <option>8000+</option>
            </select>
            <label className="block text-gray-700 text-sm font-bold space-y-3">
              your budget
            </label>
            <div className="flex justify-center items-center">
              <div>
                <input
                  type="number"
                  className="w-[100px] border p-1"
                  name=""
                  id=""
                  placeholder="min"
                />
              </div>
              <span className="mx-2 text-center">to</span>
              <div>
                <input
                  type="number"
                  className="w-[100px] border p-1"
                  name=""
                  id=""
                  placeholder="max"
                />
              </div>

              <span className="bg-black px-4 py-2 cursor-pointer  rounded-md ml-2">
                <FontAwesomeIcon icon={faArrowRight} className="text-white" />
              </span>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-3">
              Star Rating
            </label>
            <select className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option>1 Star</option>
              <option>2 Stars</option>
              <option>3 Stars</option>
              <option>4 Stars</option>
              <option>5 Stars</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Guest Rating
            </label>
            <select className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option>Excellent (4.5+)</option>
              <option>Very Good (4.0+)</option>
              <option>Good (3.5+)</option>
              <option>Pleasant (3.0+)</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              property type
            </label>
            <select className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option>Hotel</option>
              <option>Apartment</option>
              <option>Villa</option>
              <option>Resort</option>
              <option>Camp</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Amenities
            </label>
            <select className="form-select mt-1 block w-full rounded-md border-gray-300 shadow-sm">
              <option>Wi-fi</option>
              <option>Swimming pool</option>
              <option>spa</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Hotel Facilities
            </label>
            <div className="flex flex-col space-y-2">
              <label>
                <input type="checkbox" className="mr-2 border-2" />
                Pool
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Spa
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Gym
              </label>
            </div>
          </div>
        </div>
        <button
          className="md:hidden mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleSidebar}
        >
          Close Filters
        </button>
      </div>
    </>
  );
}

export default HotelSidebar;
