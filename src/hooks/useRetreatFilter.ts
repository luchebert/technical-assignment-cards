import { useEffect, useState } from "react";
import { RetreatType } from "../retreats";

interface RetreatFilterProps {
  retreats: RetreatType[];
}

interface RetreatFilterResult {
  filteredRetreats: RetreatType[];
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
}

export const useRetreatFilter = ({
  retreats,
}: RetreatFilterProps): RetreatFilterResult => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [filteredRetreats, setFilteredRetreats] = useState<RetreatType[]>([]);

  useEffect(() => {
    // this prevents running the logic until someone actually types in or uses the country select
    if (searchQuery === "" && selectedCountry === "") {
      setFilteredRetreats(retreats);
      return;
    }

    const filteredRetreats = retreats.filter((retreat) => {
      // Filter by search query
      const matchSearchQuery =
        searchQuery.trim() === "" ||
        retreat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        retreat.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
        retreat.description.toLowerCase().includes(searchQuery.toLowerCase());

      // Filter by country
      const matchCountry =
        selectedCountry.trim() === "" || retreat.country === selectedCountry;

      return matchSearchQuery && matchCountry;
    });

    const sortByrank = (a: RetreatType, b: RetreatType) => {
      const rankA = calculateRank(a);
      const rankB = calculateRank(b);

      return rankB - rankA;
    };

    // ranking logic title > country > description
    const calculateRank = (retreat: RetreatType) => {
      let rank = 0;
      const query = searchQuery.toLowerCase();

      if (retreat.title.toLowerCase().includes(query)) {
        rank += 3;
      }
      if (retreat.country.toLowerCase().includes(query)) {
        rank += 2;
      }
      if (retreat.description.toLowerCase().includes(query)) {
        rank += 1;
      }

      return rank;
    };
    // Sort filteredRetreats based on rank
    filteredRetreats.sort(sortByrank);
    setFilteredRetreats(filteredRetreats);
  }, [searchQuery, selectedCountry, retreats]);

  return { filteredRetreats, setSearchQuery, setSelectedCountry };
};
