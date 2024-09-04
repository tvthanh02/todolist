import { MyTodoContext, TodoContextType } from './store/TodoContext';
import { useContext, useEffect, useMemo, useState } from 'react';
import TODO_ACTION from './constants';
import { loadTodoFromStorage } from './utilities/localstorage';
import { Todo } from './components';
import './index.css';
import './app.css';

const App = () => {
  const { state, dispatcher } = useContext(MyTodoContext) as TodoContextType;
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    const todosFromLocalstorage = loadTodoFromStorage();
    if (todosFromLocalstorage?.length > 0) {
      dispatcher({
        type: TODO_ACTION.SET_TODO,
        payload: todosFromLocalstorage,
      });
    }
  }, [dispatcher]);

  const filteredTodos = useMemo(() => {
    switch (state.selectedFilter) {
      case 'processing':
        return state.todos.filter((todo) => todo.status === 'processing');
      case 'done':
        return state.todos.filter((todo) => todo.status === 'done');
      default:
        return state.todos;
    }
  }, [state.todos, state.selectedFilter]);

  const handleAddTask = () => {
    if (input.trim().length > 0) {
      dispatcher({
        type: TODO_ACTION.ADD_TODO,
        payload: {
          id: Math.floor(Math.random() * 1000),
          name: input,
          priority: 'high',
          status: 'processing',
        },
      });
      setInput('');
    }
  };

  const handleDoneTask = (id: number) => {
    dispatcher({
      type: TODO_ACTION.DONE_TODO,
      payload: id,
    });
  };

  const handleDeleteTask = (id: number) => {
    dispatcher({
      type: TODO_ACTION.DELETE_TODO,
      payload: id,
    });
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    dispatcher({
      type: TODO_ACTION.SELECTED_TODO,
      payload: value,
    });
  };

  return (
    <main className="todolist__container">
      <section className="todolist__logo">Todolist</section>
      <section className="todolist__insert-wrap">
        <div className="todolist__insert">
          <input
            className="todolist__insert-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Nhập Todo..."
          />
          <button className="todolist__insert-btnAdd" onClick={handleAddTask}>
            Thêm
          </button>
        </div>
        <div className="todolist__filter">
          <select defaultValue="all" onChange={handleChangeSelect}>
            {state.filterOptions.map((option) => {
              return (
                <option key={option} value={option.toLowerCase()}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
      </section>
      <section className="todolist__content">
        <div className="tasklist">
          <header className="tasklist__head">
            <p className="tasklist__head-title">Task</p>
            <p className="tasklist__head-title">Priority</p>
            <p className="tasklist__head-title">Status</p>
            <p className="tasklist__head-title">Actions</p>
          </header>
          <div className="tasklist__main">
            {filteredTodos.length > 0 ? (
              filteredTodos.map((todo) => (
                <Todo
                  key={todo.id}
                  todo={todo}
                  handleDoneTask={handleDoneTask}
                  handleDeleteTask={handleDeleteTask}
                />
              ))
            ) : (
              <div className="noData">No data</div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
