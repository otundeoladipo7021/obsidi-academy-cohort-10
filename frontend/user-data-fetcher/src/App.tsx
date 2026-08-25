import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";
import { fetchUserData, type User } from "./usersSlice";
import TodosPanel from "./TodosPanel";
import "./App.css";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, status, error } = useSelector(
    (state: RootState) => state.users,
  );
  const [favoriteUserIds, setFavoriteUserIds] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState<"users" | "todos">("users");

  useEffect(() => {
    if (status === "idle") {
      void dispatch(fetchUserData());
    }
  }, [dispatch, status]);

  const toggleFavoriteUser = (userId: number) => {
    setFavoriteUserIds((currentFavorites) =>
      currentFavorites.includes(userId)
        ? currentFavorites.filter((id) => id !== userId)
        : [...currentFavorites, userId],
    );
  };

  const favoriteUsers = data.filter((user) => favoriteUserIds.includes(user.id));
  const otherUsers = data.filter((user) => !favoriteUserIds.includes(user.id));

  const renderUserRows = (users: User[]) => {
    if (users.length === 0) {
      return <p className="state-message">No users in this section yet.</p>;
    }

    return (
      <ul className="user-list">
        {users.map((user) => {
          const isFavorite = favoriteUserIds.includes(user.id);

          return (
            <li className="user-row" key={user.id}>
              <div className="avatar" aria-hidden="true">
                {user.name.charAt(0)}
              </div>
              <div>
                <h3>{user.name}</h3>
                <p>
                  @{user.username} · {user.email}
                </p>
              </div>
              <span className="company">{user.company.name}</span>
              <label className="favorite-control">
                <input
                  type="checkbox"
                  checked={isFavorite}
                  onChange={() => toggleFavoriteUser(user.id)}
                />
                Favourite
              </label>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <main className="app-shell">
      <header className="app-header">
        <p className="eyebrow">Directory / live endpoint</p>
        <h1>User directory</h1>
        <p className="intro">
          A small Redux Toolkit flow for loading people from JSONPlaceholder.
        </p>
      </header>

      <div className="tab-switcher">
        <button
          type="button"
          className={activeTab === "users" ? "tab active" : "tab"}
          onClick={() => setActiveTab("users")}
        >
          Users
        </button>
        <button
          type="button"
          className={activeTab === "todos" ? "tab active" : "tab"}
          onClick={() => setActiveTab("todos")}
        >
          Todos
        </button>
      </div>

      {activeTab === "users" && (
        <>
          {status === "loading" && <p className="state-message">Loading...</p>}
          {status === "failed" && <p className="state-message error-message">{error}</p>}
          {status === "succeeded" && (
            <section className="panels-grid" aria-live="polite">
              <article className="users-panel">
                <div className="panel-heading">
                  <h2>People</h2>
                  <span className="count">{otherUsers.length} users</span>
                </div>
                {renderUserRows(otherUsers)}
              </article>
              <article className="users-panel favorites-panel">
                <div className="panel-heading">
                  <h2>Favourite Users</h2>
                  <span className="count">{favoriteUsers.length} users</span>
                </div>
                {renderUserRows(favoriteUsers)}
              </article>
            </section>
          )}
        </>
      )}

      {activeTab === "todos" && <TodosPanel />}
    </main>
  );
}

export default App;