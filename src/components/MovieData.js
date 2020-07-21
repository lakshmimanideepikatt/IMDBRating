import React,{useContext} from "react"
import Context from "../Context"
const MovieData=()=>{
    const {movie}=useContext(Context)
    const {Title,Genre,imdbRating,BoxOffice,Actors}=movie
    
    return(
<div className="weather-data">
  <p className="weather__tagline">Movie Review for <span className="weather-data__city">{Title}</span></p>
  <div className="weather-data__box">
    <span className="weather-data__property">
      <p className="weather-data__title">Genre</p>
      <p className="weather-data__value">{Genre}</p>
    </span>
    <span className="weather-data__property">
      <p className="weather-data__title">imdbRating</p>
      <p className="weather-data__value">{imdbRating}</p>
    </span>
    <span className="weather-data__property">
      <p className="weather-data__title">BoxOfficeCollection</p>
      <p className="weather-data__value">{BoxOffice}</p>
    </span>
  </div>
  <div>
      <span className="weather-data__property">

      <p className="weather-data__title">Starring</p>
    <p className="weather-data__value">{Actors}</p>
      </span>
  </div>
</div>
    )
}
export default MovieData