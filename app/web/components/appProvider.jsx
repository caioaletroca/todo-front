import React from "react";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/integration/react";

// Api
import history from "core/api/history";

// Store
import store from "core/store";

// Components
import App from "web/components/app";
import { registerStorage } from "saga-manager";

/**
 * The main load screen
 */
export function AppLoadingScreen() {
  return "Carregando...";
}

/**
 * Provider a load screen for the application
 */
export default function AppProvider() {
  React.useEffect(() => {
    registerStorage(store);
  }, []);

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <PersistGate loading={<AppLoadingScreen />} persistor={store.persistor}>
          <App />
        </PersistGate>
      </ConnectedRouter>
    </Provider>
  );
}