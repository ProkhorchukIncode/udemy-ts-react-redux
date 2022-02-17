import { IFetchTodosAction, IDeleteTodoAction } from './todos';

export enum ActionTypes {
  FETCH_TODOS = 'FETCH_TODOS',
  DELETE_TODOS = 'DELETE_TODOS',
}

export type Action = IFetchTodosAction | IDeleteTodoAction;
