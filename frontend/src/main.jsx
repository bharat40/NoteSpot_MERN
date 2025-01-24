import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserStore } from "./app/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={UserStore}>
    <App />
  </Provider>
);
