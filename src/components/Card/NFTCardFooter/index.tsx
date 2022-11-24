import React from 'react';

import { Button, CardFooter, Flex } from '@chakra-ui/react';

import { INFTCardFooter } from '../../../@type/NFTCard';

export const NFTCardFooter: React.FC<INFTCardFooter> = ({ isAuction }) => {
  return (
    <CardFooter>
      {isAuction ? (
        <Button
          variant='solid'
          colorScheme='blue'
          borderRadius='3'
          flex={1}
          size='lg'
        >
          BID NOW
        </Button>
      ) : (
        <Flex justify='space-between' flex='1' flexWrap='wrap'>
          <Button variant='outline' borderRadius='3' size='lg' m='1'>
            Add to cart
          </Button>
          <Button
            variant='solid'
            colorScheme='blue'
            borderRadius='3'
            size='lg'
            m='1'
            minW={[120, 150]}
          >
            Buy now
          </Button>
        </Flex>
      )}
    </CardFooter>
  );
};
