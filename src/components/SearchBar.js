import React,{useEffect, useRef} from "react";
import { MdSearch } from "react-icons/md";
import { useGlobalContext } from "../context";

const SearchBar = () =>{
    const {setSearchTerm} = useGlobalContext()
    const searchValue = useRef('')

    useEffect(()=>{
        searchValue.current.focus()
    },[])

    const searchCocktail = ()=>{
        setSearchTerm(searchValue.current.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
    }

    return <section className="search-section">
        <form onSubmit={handleSubmit} autoComplete='off'>
            <div className="search-form">
                <MdSearch className="search-img"/>
               <input type='text' name="name" id="name" ref={searchValue} placeholder="Search your favorite cocktail" onChange={searchCocktail}/> 
            </div>
        </form>
    </section>
}

export default SearchBar