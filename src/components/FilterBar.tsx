import React from "react";

const FilterBar: React.FC = () => {
  return (
    <div className="lg:flex sm:block items-center justify-between bg-[#fdf6ef] p-4">

      <div className="flex items-center space-x-4">
  
        <button className="flex items-center space-x-2 text-black font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 12.414V19a1 1 0 01-.447.894l-4 2.667A1 1 0 019 21V12.414l-4.707-4.707A1 1 0 014 6V4z"
            />
          </svg>
          <span>Filter</span>
        </button>


        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-md bg-black text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h5v5H3V3zm7 0h5v5h-5V3zm7 0h5v5h-5V3zM3 10h5v5H3v-5zm7 0h5v5h-5v-5zm7 0h5v5h-5v-5zM3 17h5v5H3v-5zm7 0h5v5h-5v-5zm7 0h5v5h-5v-5z"
              />
            </svg>
          </button>
          <button className="p-2 rounded-md border border-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <span className="text-black">Showing 1–16 of 32 results</span>
      </div>

      <div className="flex items-center space-x-4">
        
        <div className="flex items-center space-x-2">
          <span className="text-black">Show</span>
          <button className="px-4 py-1 rounded-md border border-black text-black font-medium">
            16
          </button>
        </div>

      
        <div className="flex items-center space-x-2">
          <span className="text-black">Short by</span>
          <button className="px-4 py-1 rounded-md border border-black text-gray-500 font-medium">
            Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
