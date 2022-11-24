import { NFTContainer } from '../Components/NFT';
import { AppProvider } from '../Components/NFT/Context/provider';

export const Home = () => {
  return (
    <AppProvider>
      <NFTContainer />
    </AppProvider>
  );
};
