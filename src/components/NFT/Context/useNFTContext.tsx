import * as React from 'react';

import { NFTContext } from '.';

export const useNFTContext = () => {
  const app = React.useContext(NFTContext);
  if (!app) {
    throw new Error(
      'You must call useRealmApp() inside of a <RealmAppProvider />',
    );
  }
  return app;
};
