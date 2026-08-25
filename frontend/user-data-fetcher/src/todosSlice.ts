import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodosState {
  data: Todo[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: TodosState = { data: [], status: "idle", error: null };

// GET all todos
export const fetchTodos = createAsyncThunk<
  Todo[],
  void,
  { rejectValue: string }
>("todos/fetchTodos", async (_, { rejectWithValue }) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      return rejectWithValue(`Request failed with status ${response.status}`);
    }
    return (await response.json()) as Todo[];
  } catch {
    return rejectWithValue("Unable to fetch todos. Please try again.");
  }
});

// POST a new todo
export const addTodo = createAsyncThunk<Todo, string, { rejectValue: string }>(
  "todos/addTodo",
  async (title, { rejectWithValue }) => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, completed: false }),
      });
      if (!response.ok) {
        return rejectWithValue(`Request failed with status ${response.status}`);
      }
      return (await response.json()) as Todo;
    } catch {
      return rejectWithValue("Unable to add todo. Please try again.");
    }
  },
);

// PATCH a todo's completed status
export const toggleTodo = createAsyncThunk<
  Todo,
  { id: number; completed: boolean },
  { rejectValue: string }
>("todos/toggleTodo", async ({ id, completed }, { rejectWithValue }) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ completed }),
      },
    );
    if (!response.ok) {
      return rejectWithValue(`Request failed with status ${response.status}`);
    }
    return (await response.json()) as Todo;
  } catch {
    return rejectWithValue("Unable to update todo. Please try again.");
  }
});

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload ?? action.error.message ?? "Request failed.";
      })
      // add
      .addCase(addTodo.fulfilled, (state, action) => {
        // JSONPlaceholder always returns id: 201 for new posts,
        // so we swap it for a locally-unique id to avoid key collisions
        const newTodo = { ...action.payload, id: Date.now() };
        state.data.unshift(newTodo);
      })
      // toggle
      .addCase(toggleTodo.fulfilled, (state, action) => {
        const index = state.data.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) {
          state.data[index].completed = action.payload.completed;
        }
      });
  },
});

export default todosSlice.reducer;