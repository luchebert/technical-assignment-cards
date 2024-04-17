import { useState } from "react";
import "./App.css";
import rnvLogo from "./assets/rnv-logo.svg";
import retreats from "./retreats";
import SearchFilters from "./components/SearchFilters";
import RetreatList from "./components/RetreatsList";

function App() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");

  return (
    <>
      <div>
        <img src={rnvLogo} className="logo" alt="Retreats and Venues logo" />
      </div>
      {/* Search Filter */}
      <SearchFilters
        onSearchChange={setSearchQuery}
        onCountryChange={setSelectedCountry}
      />
      {/* Retreat List */}
      <RetreatList
        retreats={retreats}
        searchQuery={searchQuery}
        selectedCountry={selectedCountry}
      />
    </>
  );
}

export default App;
