import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS } from '../actions/action';

import {ITodo} from '../interface/todo';


export interface IAppState {
  todos: ITodo[];
  lastUpdate: Date;
}

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
      case ADD_TODO:
          action.todo.id = state.todos.length + 1;    
          return Object.assign({}, state, {
              todos: state.todos.concat(Object.assign({}, action.todo)),
              lastUpdate: new Date()
          })
      
      case TOGGLE_TODO:
          let todo = state.todos.find(t => t.id === action.id);
          let index = state.todos.indexOf(todo);
          return Object.assign({}, state, {
              todos: [
                  ...state.todos.slice(0, index),
                  Object.assign({}, todo, {completed: !todo.completed}),
                  ...state.todos.slice(index+1)
              ],
              lastUpdate: new Date()
          })
      case REMOVE_TODO:
          return Object.assign({}, state, {
              todos: state.todos.filter(t => t.id !== action.id),
              lastUpdate: new Date()
          })
      case REMOVE_ALL_TODOS:
          return Object.assign({}, state, {
              todos: [],
              lastUpdate: new Date()
          })
  }
  return state;
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null
}

