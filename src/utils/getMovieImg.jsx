import React from "react";
import Loading from "../components/Loading";
import placeholder from '../img/placeholder.png';

export default function getMovieImg(path,width) {
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : <Loading/>
}

/*   const imageURL = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
 */
