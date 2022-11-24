import { Box, ChakraProvider, Grid, theme } from '@chakra-ui/react';

import { Home } from './Pages/Home';
import { ColorModeSwitcher } from './ColorModeSwitcher';

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
