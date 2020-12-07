import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware } from "connected-react-router";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

// Api
import history from "core/api/history";

// Sagas
import rootSagas from 'core/sagas';

// Reducers
import rootReducers from "core/reducers";

// DevTools
let composeEnhancers = compose;

// Create saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create middleware list
const middlewares = [routerMiddleware(history), sagaMiddleware];

// Development conditionals
if (env.APP_ENV === "local" || env.APP_ENV === 'dev' || env.APP_ENV === 'hml') {
  // Logger
  middlewares.push(logger);

  // DevTools
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

// Create the composed Enhancers
const composed = composeEnhancers(applyMiddleware(...middlewares));

// Create the store
const store = createStore(rootReducers(history), undefined, composed);

// Run saga
sagaMiddleware.run(rootSagas);

// Fix hot reload
if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept("core/reducers", () => {
    const nextReducer = require("core/reducers");
    store.replaceReducer(nextReducer);
  });
}

// Persist the storage
store.persistor = persistStore(store, null, null);

export default store;