import React from "react";
import CocktailList from "../components/CocktailList";
import SearchBar from "../components/SearchBar";


const Home = ()=>{
    return (
        <>
        <SearchBar></SearchBar>
        <CocktailList></CocktailList>
        </>
    )
}

export default Home