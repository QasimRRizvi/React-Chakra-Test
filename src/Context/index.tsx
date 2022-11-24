import React from "react";
import { INftDetails } from "../Components/Cards/NFT/interface";

export const AppContext = React.createContext<{
  fetchCards: () => Promise<void>;
  cards: INftDetails[] | null;
}>({
  fetchCards: () => {
    return new Promise(() => {
      console.error("Provider Not Found");
    });
  },
  cards: null,
});
