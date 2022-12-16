import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import {MdKeyboardBackspace, MdOutlineCategory, MdInfoOutline, MdLocalBar, MdEditNote, MdChecklistRtl} from 'react-icons/md'


const CocktailDetails = ()=>{
    const {id} = useParams()
    const[detailsLoading, setDetailsLoading] = useState(false)
    const[cocktailDetails, setCocktailDeatils] = useState(null)
    const detailsUrl = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

    useEffect(()=>{
        const fetchCocktailDetails = async ()=>{
            setDetailsLoading(true)
            try {
                const response = await fetch(`${detailsUrl}${id}`)
                const data = await response.json()
                const {drinks} = data
                if(drinks){
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                      } = drinks[0]
                      const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5,]
                      const newCocktail = { name, image, info, category, glass, instructions, ingredients}
                      setCocktailDeatils(newCocktail)
                }else{
                    setCocktailDeatils(null)
                }
            } catch (error) {
               console.log(error);
            }
            setDetailsLoading(false)
        }
        fetchCocktailDetails()
    },[id])


    if(detailsLoading){
        return <Loading></Loading>
    }
    if(!cocktailDetails){
        return <h1 className='no-results'>No cocktail to display</h1>
    }

    const {name,image,category,info,glass,instructions,ingredients,} = cocktailDetails

    return (
        <section className="details-section">
            <Link to='/' className="back-btn">
                <MdKeyboardBackspace className="img-icon"/>
                <span>Back</span>
            </Link>
            <article className="details-article">
                <img src={image} className="details-img" alt={name}/>
                <div className="details-text">
                    <h4>{name}</h4>
                    <ul>
                        <li>
                            <MdOutlineCategory className="img-icon"/>
                            <span>{category}</span>
                        </li>
                        <li>
                            <MdInfoOutline className="img-icon"/>
                            <span>{info}</span>
                        </li>
                        <li>
                            <MdLocalBar className="img-icon"/>
                            <span>{glass}</span>
                        </li>
                        <li>
                            <MdEditNote className="img-icon"/>
                            <span>{instructions}</span>
                        </li>
                        <li>
                            <MdChecklistRtl className="img-icon ingre"/>
                            <span>{
                                ingredients.map((item,index)=>{
                                    return item?<span key={index}>{item}, </span>:null
                                })
                                }</span>
                        </li>
                    </ul>
                </div>
            </article>
        </section>
    )
}

export default CocktailDetails