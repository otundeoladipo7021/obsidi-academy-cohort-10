import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./store";

import {
  BrowserRouter, // Remember that you can rename what you're importing as you do so. Router tends to make more sense than "BrowserRouter", so we've renamed it thusly.
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Profile from "./Profile.tsx";

// Here's our BrowserRouter wrapper from before:

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* Think of the Routes element as a traditional switch statement: it ensures that ONLY the route we want is being displayed to the user, if we list multiple routes. */}
        <Routes>
          {/* This is where our individual <Route> components will go */}
          <Route path="/" element={<App />} />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
