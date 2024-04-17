// Ability to hide retreat or anything else

import { useState } from "react";

interface HideResult<T> {
  hiddenItems: T[];
  hideItem: (item: T) => void;
}

export const useHide = <T>(): HideResult<T> => {
  const [hiddenItems, setHiddenItems] = useState<T[]>([]);

  const hideItem = (item: T) => {
    setHiddenItems((prevHiddenItems) => [...prevHiddenItems, item]);
  };

  return { hiddenItems, hideItem };
};
