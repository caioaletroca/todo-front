import { put, takeEvery } from "redux-saga/effects";
import { createSaga } from "saga-manager";

// Actions
import { userDataActions, snackBarActions } from "core/actions";

// Api
import Server from "core/api/server";

export default function* watchUserData() {
  yield takeEvery(
    userDataActions.get.fetch,
    createSaga({
      actions: userDataActions.get,
      request: ({ payload }) =>
        Server.get('/auth', payload),
      onSuccess: function* ({ meta: { callback } }) {
        if(callback) callback();
      },
      onError: function* () {
        yield put(
            snackBarActions.add({
                message: "Não foi possível coletar os dados do usuário",
                options: {
                  variant: "error",
                },
            })
        );
      }
    })
  );

  yield takeEvery(
    userDataActions.put.fetch,
    createSaga({
      actions: userDataActions.put,
      request: ({ payload }) =>
        Server.put('/auth', payload),
      onSuccess: function* () {
        // Show success
        yield put(
            snackBarActions.add({
                message: "Dados do usuário atualizados com sucesso",
                options: {
                  variant: "success",
                },
            })
        );
      },
      onError: function* () {
        yield put(
            snackBarActions.add({
                message: "Não foi possível atualizar o cadastro",
                options: {
                  variant: "error",
                },
            })
        );
      }
    })
  );
}