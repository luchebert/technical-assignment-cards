import retreats from "../retreats";

export const countryOptions = Array.from(
  new Set(retreats.map((retreat) => retreat.country))
);
