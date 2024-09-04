import { TodoType } from '../store/rootReducer';

type propsTodo = {
  todo: TodoType;
  handleDoneTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
};

const Todo = ({ todo, handleDoneTask, handleDeleteTask }: propsTodo) => {
  const { id, name, priority, status } = todo;

  return (
    <article className="todo">
      <p className="todo__name">{name}</p>
      <div
        className={`todo__priority ${
          priority === 'low' ? 'todo__priority--low' : 'todo__priority--high'
        }`}
      >
        {priority}
      </div>
      <div
        className={`todo__status ${
          status === 'done' ? 'todo__status--done' : 'todo__status--processing'
        }`}
      >
        {status}
      </div>
      <div className="todo__actions">
        {status === 'processing' && (
          <div className="todo__actions-item">
            <i
              className="fa-solid fa-check"
              onClick={() => handleDoneTask(id)}
            ></i>
          </div>
        )}
        <div className="todo__actions-item">
          <i
            className="fa-solid fa-trash"
            onClick={() => handleDeleteTask(id)}
          ></i>
        </div>
      </div>
    </article>
  );
};

export default Todo;
