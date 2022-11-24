import * as React from "react";
import { AppContext } from ".";

export const useAppContext = () => {
  const app = React.useContext(AppContext);
  if (!app) {
    throw new Error(
      `You must call useRealmApp() inside of a <RealmAppProvider />`
    );
  }
  return app;
};
