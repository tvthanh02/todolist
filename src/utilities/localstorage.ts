import { TodoType } from '../store/rootReducer';

export const persistTodos = (todos: TodoType[]) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const loadTodoFromStorage = () => {
  return JSON.parse(localStorage.getItem('todos') || '[]');
};
