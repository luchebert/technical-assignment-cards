import RetreatCard from "./RetreatCard";
import { RetreatType } from "../retreats";
import { useHide } from "../hooks/useHide";

interface RetreatListProps {
  retreats: RetreatType[];
}

export const RetreatList = ({ retreats }: RetreatListProps) => {
  const { hiddenItems, hideItem } = useHide<RetreatType>();

  // combining the result of the actual filtered retreats and potentially hidden ones
  const filteredRetreats = retreats.filter(
    (retreat) => !hiddenItems.includes(retreat)
  );

  const isNoRetreatsFound =
    retreats.length === 0 || filteredRetreats.length === 0;

  return (
    <div
      className={`grid ${
        isNoRetreatsFound
          ? "grid-cols-1"
          : "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      } gap-4`}
    >
      {isNoRetreatsFound ? (
        <div className="text-center mt-4">No retreats found.</div>
      ) : (
        filteredRetreats.map((retreat: RetreatType) => (
          <RetreatCard
            key={retreat.id}
            retreat={retreat}
            onHide={() => hideItem(retreat)}
          />
        ))
      )}
    </div>
  );
};
