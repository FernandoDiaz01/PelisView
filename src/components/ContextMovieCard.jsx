import React, { useEffect, useState } from 'react'
import { get } from '../data/httpClient'
import '../components/ContextMovieCard.css';
import MovieCard from './MovieCard';

export default function ContextMovieCard() {

    const [movies, SetMovies] = useState([])

    useEffect(()=>{
        get("/discover/movie").then((data) => {
            SetMovies(data.results);
          
        });
    },[]);

  return (
   <ul className='container'>
    {movies.map((movie)=>
    <MovieCard key={movie.id} movie={movie}/>
    )}
   </ul>
  )
}
