import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({id,name,image,info})=>{
    return <Link to={`cocktaildetails/${id}`}>
        <section className="section-main">
        <div className="image-container"><img src={image} alt={name}/></div>
        <div className="text-container">
            <h4>{name}</h4>
            <p>{info}</p>
        </div>
    </section>
    </Link>
}

export default Cocktail