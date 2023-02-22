import { useEffect, useState } from "react";
import Card from "./Card";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  const API_URL =
    "https://api.themoviedb.org/3/movie/popular?api_key=d1337c1b44a57da86382149c337ed82c";

  const API_SEARCH = `https://api.themoviedb.org/3/discover/movie?api_key=d1337c1b44a57da86382149c337ed82c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${releaseDate}&with_genres=${genre}`;

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  const handleGenreChange = (event) => {
    setGenre(event.target.value);
  };

  const handleReleaseDateChange = (event) => {
    setReleaseDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(API_SEARCH)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };

  console.log(movies);

  return (
    <div className="App">
      <div className="nav_bar">
        <div className="heading">
          <h1>Search Your Movie</h1>
          <p>Input genre and release date</p>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={genre}
              onChange={handleGenreChange}
              placeholder="Enter the genre"
            />

            <input
              type="date"
              value={releaseDate}
              onChange={handleReleaseDateChange}
            />
            <button>Search</button>
          </form>
        </div>
      </div>

      <div className="movies">
        {movies.map((movie) => (
          <Card {...movie} />
        ))}
      </div>
    </div>
  );
}
export default App;
