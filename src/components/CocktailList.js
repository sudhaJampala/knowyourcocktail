import React from "react";
import { useGlobalContext } from "../context";
import Cocktail from "./Cocktail";
import Loading from "./Loading";

const CocktailList = ()=>{
    const {cocktails, loading} = useGlobalContext()

    if(loading){
        return <Loading></Loading>
    }

    if(cocktails.length <1){
        return <h1 className="no-results">No cocktails matched your search.</h1>
    }

    return <section className="cocktail-section">
        {
            cocktails.map((cocktail)=>{
                return <Cocktail key={cocktail.id} {...cocktail}/>
            })
        }
        
    </section>
}

export default CocktailList