import "./App.css";
import rnvLogo from "./assets/rnv-logo.svg";
import retreats from "./retreats";
import SearchFilters from "./components/SearchFilters";
import RetreatList from "./components/RetreatsList";
import { useRetreatFilter } from "./hooks/useRetreatFilter";

function App() {
  const { filteredRetreats, setSearchQuery, setSelectedCountry } =
    useRetreatFilter({
      retreats,
    });

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
      <RetreatList retreats={filteredRetreats} />
    </>
  );
}

export default App;
