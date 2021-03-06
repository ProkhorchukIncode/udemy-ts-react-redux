import { combineReducers } from 'redux';

import { todosReducer } from './todos';
import { ITodo } from './../actions/index';

export interface IStoreState {
  todos: ITodo[];
}

export const reducers = combineReducers({
  todos: todosReducer,
});
