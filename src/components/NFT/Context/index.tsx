import React from 'react';
import { INFTDetails } from '../../../@type/NFTDetails';

export const NFTContext = React.createContext<{
  fetchNFTData: () => Promise<void>;
  NFTData: INFTDetails[] | null;
}>({
  fetchNFTData: () => {
    return new Promise(() => {
      console.error('NFT Provider Not Found');
    });
  },
  NFTData: null,
});
