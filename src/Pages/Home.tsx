import { NFTContainer } from '../Components/NFT';
import { NFTProvider } from '../Components/NFT/Context/provider';

export const Home = () => {
  return (
    <NFTProvider>
      <NFTContainer />
    </NFTProvider>
  );
};
