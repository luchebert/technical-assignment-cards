import { RetreatType } from "../retreats";
import { formatCurrency, formatNumber } from "../utils/formatters";
import Button from "./Button";

interface RetreatCardProps {
  retreat: RetreatType;
  onHide: (retreatId: number) => void;
}

const RetreatCard = ({ retreat, onHide }: RetreatCardProps) => {
  // Bubble this up to RetreatList
  const handleHideClick = () => {
    onHide(retreat.id);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg my-4">
      <div className="min-h-48 max-h-48 flex items-stretch">
        <img
          src={retreat.cover_photo.file.url}
          alt={retreat.title}
          className="w-full m-h-full object-cover"
        />
      </div>
      <div className="px-4 py-2">
        <div className="font-bold text-lg mb-2 line-clamp-1">
          {retreat.title}
        </div>
        <p className="text-gray-700 text-base line-clamp-6 text-left min-h-48">
          {retreat.description}
        </p>
      </div>
      <div className="mt-4 grid grid-cols-1 text-gray-800 px-4 py-2">
        <div>
          <div className="flex justify-between">
            <p className="font-semibold">Country</p>
            <p>{retreat.country}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Beds</p>
            <p>{formatNumber(retreat.num_beds)}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Bedrooms</p>
            <p>{formatNumber(retreat.num_bedrooms)}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Airport Code</p>
            <p>{retreat.airport_code || "N/A"}</p>
          </div>
          <div className="flex justify-between">
            <p className="font-semibold">Minutes to Airport</p>
            <p>{formatNumber(retreat.mins_to_airport!) || "N/A"}</p>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Buyout Cost</p>
          <p>
            {retreat.buyout_cost_usd
              ? formatCurrency(retreat.buyout_cost_usd)
              : "N/A"}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">Private Single Cost</p>
          <p>
            {retreat.private_single_cost_usd
              ? formatCurrency(retreat.private_single_cost_usd)
              : "N/A"}
          </p>
        </div>
        <div className="flex justify-between">
          {retreat.website_url && (
            <div className="mt-4">
              <a
                href={retreat.website_url}
                className="text-blue-600 hover:underline"
              >
                Visit Website
              </a>
            </div>
          )}
        </div>
        {retreat.recommended_tags && retreat.recommended_tags.length > 0 && (
          <div className="text-left mt-4">
            <p className="text-gray-800 font-semibold">Recommended by</p>
            <div className="flex flex-wrap mt-2">
              {retreat.recommended_tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-200 rounded-md px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="mt-4 text-right">
          <Button contents="X" onClick={handleHideClick} />
        </div>
      </div>
    </div>
  );
};

export default RetreatCard;
