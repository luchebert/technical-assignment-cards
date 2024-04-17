import { useState } from "react";
import RetreatCard from "./RetreatCard";
import { RetreatType } from "../retreats";

interface RetreatListProps {
  retreats: RetreatType[];
  searchQuery: string;
  selectedCountry: string;
}

const RetreatList = ({
  retreats,
  searchQuery,
  selectedCountry,
}: RetreatListProps) => {
  const [hiddenRetreats, setHiddenRetreats] = useState<number[]>([]);

  const handleHideCard = (retreatId: number) => {
    setHiddenRetreats([...hiddenRetreats, retreatId]);
  };

  const filteredRetreats = retreats.filter((retreat) => {
    // Filter by search query
    const matchSearchQuery =
      searchQuery.trim() === "" ||
      retreat.title.toLowerCase().includes(searchQuery.toLowerCase());

    // Filter by country
    const matchCountry =
      selectedCountry.trim() === "" || retreat.country === selectedCountry;

    // Hide retreats
    const isHidden = hiddenRetreats.includes(retreat.id);

    return matchSearchQuery && matchCountry && !isHidden;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredRetreats.map((retreat: RetreatType) => (
        <RetreatCard
          key={retreat.id}
          retreat={retreat}
          onHide={handleHideCard}
        />
      ))}
    </div>
  );
};

export default RetreatList;