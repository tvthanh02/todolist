import './index.css';
import './app.css';
const App = () => {
  return (
    <main className="todolist__container">
      <section className="todolist__logo">Todolist</section>
      <section className="todolist__insert-wrap">
        <div className="todolist__insert">
          <input
            className="todolist__insert-input"
            type="text"
            placeholder="Nhập Todo..."
          />
          <button className="todolist__insert-btnAdd">Thêm</button>
        </div>
        <div className="todolist__filter">
          <select name="filter" id="">
            <option value="1">High</option>
            <option value="1">Low</option>
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
          <div className="tasklist__body"></div>
          <div className="tasklist__main">
            <article className="todo">
              <p className="todo__name">answer question</p>
              <div className="todo__priority todo__priority--high">High</div>
              <div className="todo__status todo__status--done">Done</div>
              <div className="todo__actions"></div>
            </article>
            <article className="todo">
              <p className="todo__name">answer question</p>
              <div className="todo__priority todo__priority--high">High</div>
              <div className="todo__status todo__status--done">Done</div>
              <div className="todo__actions"></div>
            </article>
            <article className="todo">
              <p className="todo__name">answer question</p>
              <div className="todo__priority todo__priority--high">High</div>
              <div className="todo__status todo__status--done">Done</div>
              <div className="todo__actions">
                <div className="todo__actions-item">
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="todo__actions-item">
                  <i className="fa-solid fa-trash"></i>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
