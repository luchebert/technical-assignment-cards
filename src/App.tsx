import "./App.css";
import retreats from "./retreats";
import SearchFilters from "./components/SearchFilters";
import RetreatList from "./components/RetreatsList";
import { useRetreatFilter } from "./hooks/useRetreatFilter";
import Logo from "./components/Logo";
import { useSearchFilters } from "./hooks/useSearchFilters";

function App() {
  // logic to filter retreats based on query/country combination
  const { filteredRetreats, setSearchQuery, setSelectedCountry } =
    useRetreatFilter({
      retreats,
    });

  // logic to store filter values in state
  const {
    searchQuery,
    selectedCountry,
    handleSearchChange,
    handleCountryChange,
  } = useSearchFilters();

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-8">
          <Logo />
          <h1 className="text-3xl font-bold text-gray-900">
            Retreats and Venues
          </h1>
        </div>
        <SearchFilters
          searchQuery={searchQuery}
          selectedCountry={selectedCountry}
          onSearchChange={(query) => {
            setSearchQuery(query);
            handleSearchChange(query);
          }}
          onCountryChange={(country) => {
            setSelectedCountry(country);
            handleCountryChange(country);
          }}
        />
        <RetreatList retreats={filteredRetreats} />
      </div>
    </>
  );
}

export default App;
