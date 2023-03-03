import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import AddRecipe from "./pages/AddRecipe";

export default function App() {
  return (
    <BrowserRouter>
   <Routes>
    <Route element={<SignIn />} path="/sign-in"/>
    <Route element={<SignUp />} path="/sign-up"/>
    <Route element={<Home />} path="/"/>
    <Route element={<AddRecipe />} path="/adicionar-receita"/>
    <Route element={<Home />} path="/favoritas"/>
   </Routes>
   </BrowserRouter>
  );
}

