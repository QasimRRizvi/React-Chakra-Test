import { Flex, Spinner } from '@chakra-ui/react';
import { NFTCard } from '../Components/Cards/NFT';
import { useAppContext } from '../Context/useAppContext';

export const Home = () => {
  const { cards } = useAppContext();

  return (
    <Flex flex='1' justifyContent={'center'} flexWrap='wrap'>
      {cards?.length ? (
        cards.map((card) => <NFTCard key={card.id} data={card} />)
      ) : (
        <Spinner
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
      )}
    </Flex>
  );
};
