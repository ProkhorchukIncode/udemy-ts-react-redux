import { ITodo, Action, ActionTypes } from './../actions';

export const todosReducer = (state: ITodo[] = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TODOS:
      return action.payload;
    case ActionTypes.DELETE_TODOS:
      return state.filter((todo: ITodo) => todo.id !== action.payload);
    default:
      return state;
  }
};
