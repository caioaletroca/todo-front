import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import sessionStorage from "redux-persist/lib/storage/session";
import { persistCombineReducers } from "redux-persist";

// UI
import { auth } from './ui/authReducers';
import { snackBar } from './ui/snackBarReducers';

const entitiesCache = {
    key: "entities",
    storage: sessionStorage,
};

export default (history) => combineReducers({
    entities: persistCombineReducers(entitiesCache, {
        auth,
    }),
    ui: combineReducers({
        snackBar   
    }),
    router: connectRouter(history)
})