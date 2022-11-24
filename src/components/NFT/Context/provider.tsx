import React from 'react';
import { NFTContext } from '.';
import { INFTDetails } from '../../Card/interface';
import { IAppProvider } from './interface';
import ContextMiddleware from './middleware';

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
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
