import "./App.css";
import MenuList from "./components/menuList/menuList";
import React, { useEffect, useState } from "react";
// import AdminForm from "./components/AdminForm/AdminForm";
import ChangeMenu from './components/ChangeMenu/ChangeMenu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "./components/MenuPage/MenuPage";
import LoginForm from './components/LoginForm/LoginForm'
import AdminForm from "./components/AdminForm/AdminForm";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<MenuPage/>}/>
        <Route path='/AdminLogin' exact element={<LoginForm />} />
        <Route path='/AdminForm' exact element={<AdminForm/>}/>
        <Route path='/ChangeMenu' exact element={<ChangeMenu />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
