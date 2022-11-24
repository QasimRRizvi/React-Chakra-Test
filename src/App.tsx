import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Home } from './Pages/Home';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box fontSize='xl'>
      <Grid minH='100vh' p={3}>
        <ColorModeSwitcher justifySelf='flex-end' />
        <Home />
      </Grid>
    </Box>
  </ChakraProvider>
);
