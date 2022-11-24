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
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { FaHeart } from "react-icons/fa";
import { CountDown } from "../../CountDown";
import { INftDetails } from "./interface";

interface props {
  data: INftDetails;
}

export const NFTCard: React.FC<props> = ({ data }) => {
  const isAuction = React.useMemo(() => data.type === "AUCTION", [data.type]);

  return (
    <Card maxW="sm">
      <CardHeader justifyContent={"space-between"} pb="0">
        <Flex flex="1" justifyContent={"space-between"}>
          {data.tags.map((tag) => (
            <Button variant="outline">
              <Box as="span">{tag}</Box>
            </Button>
          ))}
        </Flex>
      </CardHeader>
      <CardBody>
        <Image src={data.image?.src} alt={data.image?.alt} borderRadius="lg" />
        <Stack mt="6" spacing="3">
          <Flex flex="1" justifyContent={"space-between"}>
            <VStack>
              <Heading size="md">{`#${data.id}`}</Heading>
              <Text>{data.name}</Text>
            </VStack>
            <HStack>
              <FaHeart />
              <Text>{data.likes}</Text>
            </HStack>
          </Flex>
          <Flex flex="1" justifyContent={"space-between"}>
            <VStack>
              {isAuction ? (
                <Heading size="md">HIGHEST BID</Heading>
              ) : (
                <Text>{`$${data.amount}`}</Text>
              )}
              <Text>{`$${isAuction ? data.amount : data.discount}`}</Text>
            </VStack>
            <VStack>
              <Heading size="md">{`${
                isAuction ? "AUCTION" : "FLASH DEAL"
              } ENDS IN`}</Heading>
              <CountDown startDate={new Date(data.endTime)} />
            </VStack>
          </Flex>
        </Stack>
      </CardBody>
      <CardFooter
        justify="space-between"
        flexWrap="wrap"
        sx={{
          "& > button": {
            minW: "136px",
          },
        }}
      >
        {isAuction ? (
          <Button variant="solid" colorScheme="blue" flex={1} size="lg">
            BID NOW
          </Button>
        ) : (
          <>
            <Button variant="outline" colorScheme="blue" size="lg">
              Add to cart
            </Button>
            <Button variant="solid" colorScheme="blue" size="lg">
              Buy now
            </Button>
          </>
        )}
      </CardFooter>
    </Card>
  );
};
