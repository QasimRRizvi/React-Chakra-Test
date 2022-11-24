import { HStack, Spinner } from "@chakra-ui/react";
import { NFTCard } from "../Components/Cards/NFT";
import { useAppContext } from "../Context/useAppContext";

export const Home = () => {
  const { cards } = useAppContext();

  return (
    <HStack spacing={8}>
      {cards?.length ? (
        cards.map((card) => <NFTCard key={card.id} data={card} />)
      ) : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
    </HStack>
  );
};
