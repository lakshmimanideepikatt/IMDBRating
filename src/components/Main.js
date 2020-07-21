import React, {useState} from 'react'
import Header from "./Header"
import axios from "axios"
import Content from "./Content"
import MovieSearch from "./MovieSearch"
import MovieData from "./MovieData"
import Context from "../Context"
import Error from "./Error"
const Main=()=>{
    const [movie,setMovie]=useState()
    
    const [error,setError]=useState()
    const api_call=async e=>{
        e.preventDefault()
        const name=e.target.elements.name.value
        if(!name) return setError("Please enter the movie name") ,setMovie(null)
        
        const url=`http://www.omdbapi.com/?t=${name}&apikey=34bdd4ae`
       const request= axios.get(url)
       const response=await request
       setMovie(response.data)
       
       setError(null)
    }
    movie&&console.log(movie)
    return(
        <div className="main">
            <Header/>
            <Content>
                <Context.Provider value={{api_call,movie}}>
                <MovieSearch />
               {movie&& <MovieData />}
               {!movie&&<Error error={error}/>}
                </Context.Provider>
                
            </Content>
        </div>
    )
}
export default Main