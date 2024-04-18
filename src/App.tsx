import "./App.css";
import retreats from "./retreats";
import { SearchFilters } from "./components/SearchFilters";
import { RetreatList } from "./components/RetreatsList";
import { useRetreatFilter } from "./hooks/useRetreatFilter";
import { useSearchFilters } from "./hooks/useSearchFilters";
import { Header } from "./components/Header";

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
    <div className="container mx-auto px-4">
      <Header />
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
  );
}

export default App;
