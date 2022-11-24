import { Flex, Spinner } from '@chakra-ui/react';
import { useNFTContext } from './Context/useNFTContext';
import { NFTCard } from '../Card';

export const NFTContainer = () => {
  const { NFTData } = useNFTContext();

  return (
    <Flex flex='1' flexWrap='wrap'>
      {NFTData?.length ? (
        NFTData.map((NFT) => <NFTCard key={NFT.id} data={NFT} />)
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
