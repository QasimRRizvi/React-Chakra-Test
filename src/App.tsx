import {
  ChakraProvider,
  Box,
  Grid,
  theme,
  HStack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { NFTModal } from "./components/Modals/nft";
import { NFT_DETAILS } from "./resources/data/nftDetails";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <HStack spacing={8}>
          {NFT_DETAILS.map((details) => (
            <NFTModal data={details} />
          ))}
        </HStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
