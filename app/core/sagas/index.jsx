import { all } from "redux-saga/effects";
import { registerSagas } from "saga-manager";

// Entities
import watchAuth from "./entities/authSaga";
import watchUserData from "./entities/userDataSaga";
import watchTodo from "./entities/todoSaga";

/**
 * The main root Saga
 * @yield {[type]} [description]
 */
export default function* rootSaga() {
  yield all(
    registerSagas([
      watchAuth,
      watchUserData,
      watchTodo
    ])
  );
}