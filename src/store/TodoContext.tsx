import React, { useReducer } from 'react';
import rootReducer, { ActionType, StateType } from './rootReducer';
import { createContext } from 'react';

const initState: StateType = {
  todos: [],
  selectedFilter: 'all',
  filterOptions: ['All', 'Processing', 'Done'],
};

export type TodoContextType = {
  state: StateType;
  dispatcher: React.Dispatch<ActionType>;
};

export const MyTodoContext = createContext<TodoContextType | null>(null);

type propsTodoContext = {
  children: React.ReactNode;
};

const TodoContext = ({ children }: propsTodoContext) => {
  const [state, dispatcher] = useReducer(rootReducer, initState);
  return (
    <MyTodoContext.Provider
      value={{
        state,
        dispatcher,
      }}
    >
      {children}
    </MyTodoContext.Provider>
  );
};

export default TodoContext;
