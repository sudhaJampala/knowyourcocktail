import React, { useState, useContext, useEffect, useCallback} from "react";

const AppContext = React.createContext();
const mainUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppProvider = ({children}) =>{
    const [loading, setLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('a')
    const [cocktails, setCocktails] = useState([])

    const fetchCocktails = useCallback(async ()=>{
        setLoading(true)
        try {
            const response = await fetch(`${mainUrl}${searchTerm}`)
            const data = await response.json()
            const { drinks } = data
            if(drinks){
                const newCocktailList = drinks.map((item)=>{
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic
                      } = item
                      return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic
                      }
                })
                console.log(newCocktailList);
            setCocktails(newCocktailList)
            }else{
                setCocktails([])
            }
            setLoading(false)
            
        } catch (error) {
            console.log(error);
            setLoading(false)
        }

    },[searchTerm])



    useEffect(() => {
        fetchCocktails()
    },[searchTerm,fetchCocktails])

    return (
        <AppContext.Provider value={{loading, cocktails, searchTerm, setSearchTerm}}>{children}</AppContext.Provider>
    )
}

const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export  { useGlobalContext, AppContext, AppProvider}
