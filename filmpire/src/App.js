import { useEffect , useState} from 'react';
import './App.css';
import search from './search.svg';
import MovieCard from './MovieCard';
function App() {
  // cc1d56bd movies api key
  const [movies, setmovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState('');
  const Api_Url = 'http://www.omdbapi.com?apikey=cc1d56bd';

  // const movie1 = 
  //     {
  //   "Title": "Avengers: Infinity War",
  //   "Year": "2018",
  //   "imdbID": "tt4154756",
  //   "Type": "movie",
  //   "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
  //   }

  const searchMovies = async (title) => {
    const response = await fetch(`${Api_Url}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
  };
  useEffect(() => {
    searchMovies('Avengers');
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Search for Movie"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)}
        />
        <img src={search} alt="search icon" onClick={() => searchMovies(searchTerm)} />
      </div>
      {movies.length>0 ? 
      (<div className="container">
        {movies.map((movie)=>(
       <MovieCard movie={movie} />
        ))}
      </div>) :
        (
      <div className='empty'>
        <h2>No Movies Found</h2>
      </div>
        )
      }
    </div>
  );
}

export default App;
