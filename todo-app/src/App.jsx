import { useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import About from "./pages/about";
import Home from "./pages/home";
import TodoList from "./components/todolist";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Todolist" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
