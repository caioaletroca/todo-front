import { put, takeEvery } from "redux-saga/effects";
import { createSaga } from "saga-manager";

// Actions
import { todoActions, snackBarActions } from "core/actions";

// Api
import Server from "core/api/server";

export default function* watchTodo() {
  yield takeEvery(
    todoActions.get.fetch,
    createSaga({
      actions: todoActions.get,
      request: ({ meta: { user_id } }) =>
        Server.get(`/users/${user_id}/todos`),
      onError: function* () {
        yield put(
            snackBarActions.add({
                message: "Não foi possível coletar as tarefas",
                options: {
                  variant: "error",
                },
            })
        );
      }
    })
  );

  yield takeEvery(
    todoActions.post.fetch,
    createSaga({
      actions: todoActions.post,
      request: ({ payload, meta: { user_id } }) =>
        Server.post(`/users/${user_id}/todos`, payload),
      onSuccess: function* ({ meta: { callback } }) {
        if(callback) callback();
      },
      onError: function* ({ meta: { callback } }) {
        if(callback) callback();
        yield put(
            snackBarActions.add({
                message: "Não foi possível criar uma nova tarefa",
                options: {
                  variant: "error",
                },
            })
        );
      }
    })
  );

  yield takeEvery(
    todoActions.put.fetch,
    createSaga({
      actions: todoActions.put,
      request: ({ payload, meta: { todo_id } }) =>
        Server.put(`/todos/${todo_id}`, payload),
      onSuccess: function* ({ meta: { callback } }) {
        if(callback) callback();
      },
      onError: function* ({ meta: { callback } }) {
        if(callback) callback();
        yield put(
            snackBarActions.add({
                message: "Não foi possível alterar a tarefa",
                options: {
                  variant: "error",
                },
            })
        );
      }
    })
  );

  yield takeEvery(
    todoActions.delete.fetch,
    createSaga({
      actions: todoActions.delete,
      request: ({ payload, meta: { todo_id } }) =>
        Server.delete(`/todos/${todo_id}`),
      onSuccess: function* ({ meta: { callback } }) {
        if(callback) callback();
      },
      onError: function* ({ meta: { callback } }) {
        if(callback) callback();
        yield put(
            snackBarActions.add({
                message: "Não foi possível excluir a tarefa",
                options: {
                  variant: "error",
                },
            })
        );
      }
    })
  );
}