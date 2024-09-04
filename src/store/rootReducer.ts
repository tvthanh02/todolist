import TODO_ACTION from '../constants';
import { persistTodos } from '../utilities/localstorage';

export type TodoType = {
  id: number;
  name: string;
  priority: 'high' | 'low';
  status: 'processing' | 'done';
};

export type ActionType = {
  type: string;
  payload: TodoType | TodoType[] | number | string;
};
export type StateType = {
  todos: TodoType[] | [];
  selectedFilter: 'all' | 'processing' | 'done';
  filterOptions: string[];
};

const persistAndUpdateState = (newState: StateType) => {
  persistTodos(newState.todos);
  return newState;
};

const rootReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case TODO_ACTION.SET_TODO: {
      return {
        ...state,
        todos: [...(action.payload as TodoType[])],
      };
    }

    case TODO_ACTION.ADD_TODO:
      return persistAndUpdateState({
        ...state,
        todos: [...state.todos, action.payload as TodoType],
      });

    case TODO_ACTION.DELETE_TODO:
      return persistAndUpdateState({
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      });

    case TODO_ACTION.SELECTED_TODO:
      return {
        ...state,
        selectedFilter: action.payload as 'all' | 'processing' | 'done',
      };

    case TODO_ACTION.DONE_TODO:
      return persistAndUpdateState({
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, status: 'done' } : todo
        ),
      });
    default:
      return state;
  }
};

export default rootReducer;
