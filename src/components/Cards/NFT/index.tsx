import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
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
import { percentage } from '../../../Utils/common';
import { CountDown } from '../../CountDown';
import { INftDetails } from './interface';

interface props {
  data: INftDetails;
}

export const NFTCard: React.FC<props> = ({ data }) => {
  const isAuction = React.useMemo(() => data.type === 'AUCTION', [data.type]);

  return (
    <Card
      maxW='sm'
      m='2'
      bg={useColorModeValue(theme.colors.gray[200], theme.colors.gray[700])}>
      <CardHeader justifyContent={'space-between'} pb='0'>
        <Flex flex='1' justifyContent={'space-between'}>
          {data.tags.map((tag) => (
            <Tag
              size='md'
              key={`${tag}-key`}
              borderRadius='full'
              variant='outline'>
              <TagLabel>{tag}</TagLabel>
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
                <Heading color='green.300' size='sm'>
                  HIGHEST BID
                </Heading>
              ) : (
                <Box pos='relative'>
                  <Text
                    fontWeight='bold'
                    fontSize='large'
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
              <Text fontWeight='bold'>{`$${
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
              flex='0.6'>
              <Heading color='blue.200' size='sm'>{`${
                isAuction ? 'AUCTION' : 'FLASH DEAL'
              } ENDS IN`}</Heading>
              <CountDown startDate={new Date(data.endTime)} />
            </Box>
          </Flex>
        </Stack>
      </CardBody>
      <CardFooter
        justify='space-between'
        flexWrap='wrap'
        sx={{
          '& > button': {
            minW: '120px',
          },
        }}>
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
          <>
            <Button variant='outline' borderRadius='3' size='lg' m='1'>
              Add to cart
            </Button>
            <Button
              variant='solid'
              colorScheme='blue'
              borderRadius='3'
              size='lg'
              m='1'>
              Buy now
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};
