import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import { fetchTodos, addTodo, toggleTodo, type Todo } from "./todosSlice";

function TodosPanel() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector(
    (state: RootState) => state.todos,
  );
  const [newTodoTitle, setNewTodoTitle] = useState("");

  useEffect(() => {
    if (status === "idle") {
      void dispatch(fetchTodos());
    }
  }, [dispatch, status]);

  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedTitle = newTodoTitle.trim();
    if (trimmedTitle === "") return;

    void dispatch(addTodo(trimmedTitle));
    setNewTodoTitle("");
  };

  const handleToggle = (todo: Todo) => {
    void dispatch(toggleTodo({ id: todo.id, completed: !todo.completed }));
  };

  if (status === "loading") {
    return <p className="state-message">Loading...</p>;
  }

  if (status === "failed") {
    return <p className="state-message error-message">{error}</p>;
  }

  return (
    <section className="panels-grid" aria-live="polite">
      <article className="users-panel">
        <div className="panel-heading">
          <h2>Todos</h2>
          <span className="count">{data.length} todos</span>
        </div>

        <form onSubmit={handleAddTodo} className="add-todo-form">
          <input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="Add a new todo..."
          />
          <button type="submit">Add</button>
        </form>

        {data.length === 0 ? (
          <p className="state-message">No todos yet.</p>
        ) : (
          <ul className="user-list">
            {data.map((todo) => (
              <li className="user-row" key={todo.id}>
                <label className="favorite-control">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggle(todo)}
                  />
                  <span
                    style={{
                      textDecoration: todo.completed
                        ? "line-through"
                        : "none",
                    }}
                  >
                    {todo.title}
                  </span>
                </label>
                <span className="company">
                  {todo.completed ? "Completed" : "Pending"}
                </span>
              </li>
            ))}
          </ul>
        )}
      </article>
    </section>
  );
}

export default TodosPanel;