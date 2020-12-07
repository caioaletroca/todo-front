import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import sessionStorage from "redux-persist/lib/storage/session";
import { persistCombineReducers } from "redux-persist";

// Entities
import { auth, authAuthenticateState, authRegisterState } from './entities/authReducers';
import { userData, userDataGetState, userDataPutState } from './entities/userDataActions';
import { todos, todoGetState, todoPostState, todoPutState } from './entities/todoReducers';

// UI
import { snackBar } from './ui/snackBarReducers';

const entitiesCache = {
    key: "entities",
    storage: sessionStorage,
};

export default (history) => combineReducers({
    entities: persistCombineReducers(entitiesCache, {
        auth,
        userData,
        todos
    }),
    ui: combineReducers({
        snackBar,
        authAuthenticateState,
        authRegisterState,
        userDataGetState,
        userDataPutState,
        todoGetState,
        todoPostState,
        todoPutState
    }),
    router: connectRouter(history)
})