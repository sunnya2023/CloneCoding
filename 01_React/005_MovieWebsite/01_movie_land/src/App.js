//https://www.omdbapi.com/apikey.aspx
//b70b2eb0
import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg'
import './App.css'

const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=b70b2eb0'

const movie1 = {
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}

function App() {
  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState()

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('Spiderman')
  }, [])
  return (

    <div className="app">
      <h1>MovieLand</h1>
      <div className='search'>
        <input placeholder='Search for movies' value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          arc={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0
          ? (
            <div className='container'>
              {
                movies.map((movie) => (
                  <MovieCard movie={movie} />
                ))
              }
            </div>
          ) : (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
      }


    </div >
  );
}

export default App;
