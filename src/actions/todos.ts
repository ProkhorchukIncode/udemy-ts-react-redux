import { ActionTypes } from './types';
import axios from 'axios';
import { Dispatch } from 'redux';

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

export interface IFetchTodosAction {
  type: ActionTypes.FETCH_TODOS;
  payload: ITodo[];
}

export interface IDeleteTodoAction {
  type: ActionTypes.DELETE_TODOS;
  payload: number;
}

const url = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const res = await axios.get<ITodo[]>(url);

    dispatch<IFetchTodosAction>({
      type: ActionTypes.FETCH_TODOS,
      payload: res.data,
    });
  };
};

export const deleteTodo = (id: number): IDeleteTodoAction => {
  return {
    type: ActionTypes.DELETE_TODOS,
    payload: id,
  };
};
