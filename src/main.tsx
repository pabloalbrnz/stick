import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./pages/App";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";

import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/stick" element={<App />} />
        <Route path="/stick/signin" element={<SignIn />} />
        <Route path="/stick/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
    ;
  </React.StrictMode>
);
