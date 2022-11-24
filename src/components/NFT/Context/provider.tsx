import React from 'react';

import { INFTDetails } from '../../../@type/NFTDetails';
import { IAppProvider } from '../../../@type/NFTProvider';

import ContextMiddleware from './middleware';
import { NFTContext } from '.';

export const NFTProvider: React.FC<IAppProvider> = ({ children }) => {
  const [NFTData, setNFTData] = React.useState<INFTDetails[] | null>(null);

  React.useEffect(() => {
    fetchNFTData();
  }, []);

  const fetchNFTData = async () => {
    try {
      const data = await ContextMiddleware.fetchNFTData();
      setNFTData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const wrapped = {
    NFTData,
    fetchNFTData,
  };

  return <NFTContext.Provider value={wrapped}>{children}</NFTContext.Provider>;
};
