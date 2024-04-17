import { useState } from "react";
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

  const filteredRetreats = retreats.filter((retreat) => {
    // Filter by search query
    const matchSearchQuery =
      searchQuery.trim() === "" ||
      retreat.title.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by country
    const matchCountry =
      selectedCountry.trim() === "" || retreat.country === selectedCountry;

    return matchSearchQuery && matchCountry;
  });

  return { filteredRetreats, setSearchQuery, setSelectedCountry };
};
