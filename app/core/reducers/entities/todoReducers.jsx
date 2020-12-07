import { createReducer } from "@reduxjs/toolkit";

// Actions
import { todoActions } from "core/actions";
import { createStateReducer } from "saga-manager";

export const todos = createReducer({}, {
    [todoActions.get.data]: (state, { payload }) => {
        payload.data.map(item => state[item.id] = item);
    },
    [todoActions.post.data]: (state, { payload }) => {
        state[payload.data.id] = payload.data;
    },
    [todoActions.put.data]: (state, { payload }) => {
        state[payload.data.id] = payload.data;
    },
    [todoActions.delete.data]: (state, { meta }) => {
        delete state[meta.todo_id];
    },
    [todoActions.clear]: () => ({})
})

export const todoGetState = createStateReducer(todoActions.get);
export const todoPostState = createStateReducer(todoActions.put);
export const todoPutState = createStateReducer(todoActions.put);