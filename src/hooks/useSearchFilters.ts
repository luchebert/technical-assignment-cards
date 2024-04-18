import { useState } from "react";

export function useSearchFilters() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
  };

  return {
    searchQuery,
    selectedCountry,
    handleSearchChange,
    handleCountryChange,
  };
}
