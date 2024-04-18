import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { countryOptions } from "../utils/filterOptions";

interface SearchFiltersProps {
  searchQuery: string;
  selectedCountry: string;
  onSearchChange: (query: string) => void;
  onCountryChange: (country: string) => void;
}

const SearchFilters = ({
  searchQuery,
  selectedCountry,
  onSearchChange,
  onCountryChange,
}: SearchFiltersProps) => {
  // Filter retreats based on text Search as you type
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange(e.target.value);
  };

  // Filter retreats based on Pre-populated Country dropdown
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onCountryChange(e.target.value);
  };

  return (
    <div className="mt-4 gap-4 flex">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <BiRightArrowAlt className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
      </div>
      <div className="flex-1">
        <label
          htmlFor="country"
          className="text-gray-700 font-semibold mb-2 hidden"
        >
          Filter by Country:
        </label>
        <select
          id="country"
          className="border border-gray-300 rounded-lg py-2 px-4 w-full pr-8 focus:outline-none focus:border-blue-500"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">All Countries</option>
          {countryOptions.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchFilters;
