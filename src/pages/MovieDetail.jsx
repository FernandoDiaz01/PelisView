import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Spinner } from 'reactstrap';
import Loading from '../components/Loading';
import { get } from '../data/httpClient'
import getMovieImg from '../utils/getMovieImg';
import './MovieDetail.css';



export default function MovieDetail() {
 
  

    const [loading, setLoading] = useState(false)

    const {movieId} = useParams()

    const [movie, setMovie] = useState([])

    const [generos, setGeneros] = useState([])
   
    useEffect(()=>{
      (async() => {
        try {
          setLoading(true);
         await get('/movie/' + movieId).then((data)=>{
            setMovie(data)
            setGeneros(data.genres[0])
          
          
          })
          
        } catch (error) {
          console.log('error', error.message)
        } 
        finally{
          setLoading(false);
        }
      })()
      
    },[])

    const imageUrl = getMovieImg(movie.poster_path, 500)

   
  return (
      <div className='detailsContainer'>
        {loading && <Loading/>}
      <div  className='btnBack'>
      <Link to={'/'}>Volver</Link>
      </div>
      
      
      <img className='col movieImage' src={imageUrl} alt={movie.title} />
   
      <div className='col movieDetails'>
        <p className='titleDetail'>
          <strong>Título: </strong>
          <br/>
          {movie.title}
        </p>
        <br/>
        <p>
          <strong>Género: </strong>
          {generos.name}
        </p>
        <br />
        <p>
          <strong>Descripción: </strong>
          {movie.overview}
        </p>
      </div>
      
    </div>

  )
}

