import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Image,
  Stack,
  Tag,
  TagLabel,
  Text,
  theme,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { INFTCard } from '../../@type/NFTCard';
import { percentage } from '../../Utils/common';
import { CountDown } from '../CountDown';

export const NFTCard: React.FC<INFTCard> = ({ data }) => {
  const isAuction = React.useMemo(() => data.type === 'AUCTION', [data.type]);

  return (
    <Card
      maxW='sm'
      m='2'
      bg={useColorModeValue('#f7f7f7', theme.colors.gray[700])}>
      <CardHeader justifyContent={'space-between'} pb='0'>
        <Flex flex='1' justifyContent={'space-between'}>
          {data.tags.map((tag) => (
            <Tag
              size='md'
              key={`${tag}-key`}
              borderRadius='full'
              variant='outline'>
              <TagLabel minW='70' textAlign='center'>
                {tag}
              </TagLabel>
            </Tag>
          ))}
        </Flex>
      </CardHeader>
      <CardBody pb='0'>
        <Image
          src={data.image?.src}
          alt={data.image?.alt}
          borderRadius='lg'
          objectFit='cover'
          sx={{
            height: 340,
            width: 340,
          }}
        />
        <Stack mt='6' spacing='3'>
          <Flex
            flex='1'
            justifyContent={'space-between'}
            alignItems='flex-start'>
            <Box pb='4'>
              <Text fontWeight='medium'>{`#${data.id}`}</Text>
              <Text fontSize='md' fontWeight='bold' color='blue.400'>
                {data.name}
              </Text>
            </Box>
            <HStack>
              <FaHeart color={data?.liked ? '#ff00a1' : 'gray'} />
              <Text fontSize='md'>{data.likes}</Text>
            </HStack>
          </Flex>
          <Flex flex='1' justifyContent={'space-between'}>
            <Box
              border='1px'
              borderRadius='3'
              borderColor='blue.700'
              p='3'
              flex='0.4'
              mr='3'>
              {isAuction ? (
                <Text
                  color='green.300'
                  fontWeight='bold'
                  fontSize={['xs', 'sm', 'md']}>
                  HIGHEST BID
                </Text>
              ) : (
                <Box pos='relative'>
                  <Text
                    fontWeight='bold'
                    fontSize={['md', 'l']}
                    decoration='line-through'
                    sx={{
                      lineHeight: 1.2,
                    }}
                    color='red.500'>{`$${data.amount}`}</Text>
                  <Tag
                    pos='absolute'
                    top='-5'
                    right='2'
                    size='md'
                    borderRadius='full'
                    variant='solid'
                    colorScheme='green'>
                    <TagLabel fontWeight='bold'>{`${data.discount}% OFF`}</TagLabel>
                  </Tag>
                </Box>
              )}
              <Text fontWeight='bold' fontSize={['large', '2xl']}>{`$${
                isAuction
                  ? data.amount
                  : data.amount - percentage(data.amount, data.discount)
              }`}</Text>
            </Box>
            <Box
              border='1px'
              borderRadius='3'
              borderColor='orange.700'
              px='2'
              py='3'
              flex={'0.6'}>
              <Text
                color='blue.200'
                fontWeight='bold'
                fontSize={['xs', 'sm', 'md']}>{`${
                isAuction ? 'AUCTION' : 'FLASH DEAL'
              } ENDS IN`}</Text>
              <CountDown startDate={new Date(data.endTime)} />
            </Box>
          </Flex>
        </Stack>
      </CardBody>
      <CardFooter>
        {isAuction ? (
          <Button
            variant='solid'
            colorScheme='blue'
            borderRadius='3'
            flex={1}
            size='lg'>
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
              minW={[120, 150]}>
              Buy now
            </Button>
          </Flex>
        )}
      </CardFooter>
    </Card>
  );
};
