// import React from "react";
// import FormWithCustomHook from "./02-useEffect/formWithCustomHook";
// import MultipleCustomHooks from "./03-exmaples/MultipleCustomHooks";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import Layout from "./05-useLayoutEffect/Layout";
// import Memorize from "./06-memos/Memorize";
// import MemoHook from "./06-memos/MemoHook";
// import { CallbackHook } from "./06-memos/CallbackHook"
// import { Padre } from "./07-tarea-memo/Padre";
// import "./08-useReducer/intro-reducer";
import ReactDOM from "react-dom/client";
import "./index.css";
// import TodoReducer from "./08-useReducer/TodoReducer";
import { MainApp } from "./09-useContext/MainApp";
import { BrowserRouter } from "react-router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);
