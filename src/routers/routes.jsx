import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import LandingPage from '../pages/LandingPage';
import MovieDetail from '../pages/MovieDetail';

export default function MyRoutes() {
  return (
    <div>
        <Router>
            <Routes>
            <Route exact path='/' element={<LandingPage /> } />
            <Route exact path='/movies/:movieId' element={<MovieDetail /> } />

            </Routes>
        </Router>
    </div>
  )
}
