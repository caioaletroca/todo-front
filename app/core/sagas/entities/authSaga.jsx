import { put, takeEvery } from "redux-saga/effects";
import { createSaga } from "saga-manager";

// Actions
import { push } from "connected-react-router";
import { authActions, snackBarActions } from "core/actions";

// Api
import Server from "core/api/server";

export default function* watchAuth() {
  yield takeEvery(
    authActions.authenticate.fetch,
    createSaga({
      actions: authActions.authenticate,
      request: ({ payload }) =>
        Server.post('/login', payload),
      onSuccess: function* () {
        // Redirect user to the profile
        yield put(push('/dashboard'));
      },
      onError: function* () {
        yield put(
            snackBarActions.add({
                message: "Não foi possível efetuar o login",
                options: {
                  variant: "error",
                },
            })
        );
      }
    })
  );

  yield takeEvery(
    authActions.register.fetch,
    createSaga({
      actions: authActions.register,
      request: ({ payload }) =>
        Server.post('/register', payload),
      onSuccess: function* () {
        // Redirect user to the profile
        yield put(push('/login'));

        // Show success
        yield put(
            snackBarActions.add({
                message: "Agora já é possível entrar com o seu usuário",
                options: {
                  variant: "success",
                },
            })
        );
      },
      onError: function* () {
        yield put(
            snackBarActions.add({
                message: "Não foi possível efetuar o cadastro",
                options: {
                  variant: "error",
                },
            })
        );
      }
    })
  );
}