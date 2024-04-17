import React, { useState } from "react";
import retreats from "../retreats";
import { BiRightArrowAlt } from "react-icons/bi";

interface SearchFiltersProps {
  onSearchChange: (query: string) => void;
  onCountryChange: (country: string) => void;
}

const SearchFilters = ({
  onSearchChange,
  onCountryChange,
}: SearchFiltersProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  // Filter retreats based on text Search as you type
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    onSearchChange(e.target.value);
  };

  // Filter retreats based on Pre-populated Country dropdown
  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
    onCountryChange(e.target.value);
  };

  // Get potential countries we can filter by
  const countryOptions = Array.from(
    new Set(retreats.map((retreat) => retreat.country))
  );

  return (
    <div className="mt-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:border-blue-500"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <BiRightArrowAlt className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
      </div>
      <div className="mt-4">
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
