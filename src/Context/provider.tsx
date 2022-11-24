import React from "react";
import { AppContext } from ".";
import { INftDetails } from "../Components/Cards/NFT/interface";
import ContextMiddleware from "./middleware";

interface props {
  children: JSX.Element;
}

export const AppProvider: React.FC<props> = ({ children }) => {
  const [cards, setCards] = React.useState<INftDetails[] | null>(null);

  React.useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const data = await ContextMiddleware.fetchCards();
      setCards(data);
    } catch (error) {
      console.error(error);
    }
  };

  const wrapped = {
    cards,
    fetchCards,
  };

  return <AppContext.Provider value={wrapped}>{children}</AppContext.Provider>;
};
