import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { INftDetails } from "./interface";

interface props {
  data: INftDetails;
}

export const NFTModal: React.FC<props> = ({ data }) => (
  <Card maxW="sm">
    <CardHeader justifyContent={"space-between"}>
      <Flex flex="1" justifyContent={"space-between"}>
        {data?.tags.map((tag) => (
          <Button variant="outline">
            <Box as="span">{tag}</Box>
          </Button>
        ))}
      </Flex>
    </CardHeader>
    <CardBody>
      <Image src={data?.image?.src} alt={data?.image?.alt} borderRadius="lg" />
      <Stack mt="6" spacing="3">
        <Flex flex="1" justifyContent={"space-between"}>
          <VStack>
            <Heading size="md">{data?.id}</Heading>
            <Text>{data?.name}</Text>
          </VStack>
          <HStack>
            <FaHeart />
            <Text>{data?.likes}</Text>
          </HStack>
        </Flex>
        {/* <Heading size="md">Living room Sofa</Heading>
        <Text>
          This sofa is perfect for modern tropical spaces, baroque inspired
          spaces, earthy toned spaces and for people who love a chic design with
          a sprinkle of vintage design.
        </Text>
        <Text color="blue.600" fontSize="2xl">
          $450
        </Text> */}
      </Stack>
    </CardBody>
    <Divider />
    <CardFooter
      justify="space-between"
      flexWrap="wrap"
      sx={{
        "& > button": {
          minW: "136px",
        },
      }}
    >
      <Button variant="outline" colorScheme="blue">
        Add to cart
      </Button>
      <Button variant="solid" colorScheme="blue">
        Buy now
      </Button>
    </CardFooter>
  </Card>
);
