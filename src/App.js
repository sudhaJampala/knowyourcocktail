import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import CocktailDetails from './pages/CocktailDetails';
import Error from './pages/Error';
import Navbar from "./components/Navbar";

function App(){
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="cocktaildetails/:id" element={<CocktailDetails/>}/>
            <Route path="*" element={<Error/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App