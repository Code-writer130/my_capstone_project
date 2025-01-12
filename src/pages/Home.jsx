import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/movie/550?api_key=6e6730d401ee421ff457202b260f1380"
        ); // This is the URL of the API that we want to fetch data from
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=6e6730d401ee421ff457202b260f1380"
        );

        setTrendingMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchMovie();
    fetchTrendingMovies();
  }, []);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container flex flex-col items-center justify-center h-full lg:ml-9">
      <h1 className="text-4xl font-bold mb-4 mt-8">{movie.title}</h1>
      <div className="w-full">
        <div className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative">
          <div className="flex items-center justify-center ">
            <img
              src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
              alt={movie.title}
              className="w-full max-w-xs rounded-lg shadow-lg"
            />
          </div>
          <p className="m-4 sm:text-justify">{movie.overview}</p>
        </div>
        <div className="flex space-x-4 items-center mt-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 mx-auto block">
            Watch Now
          </button>
        </div>
      </div>

      <h2 className="text-3xl font-bold mt-10">Trending Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center mt-4">
        {trendingMovies.map((movie) => (
          <Link
            key={movie.id}
            to={`/movie/${movie.id}`}
            className="bg-gray-100 rounded-lg overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-64 m-4 rounded-md object-cover"
            />
            <h3 className="p-4 text-center font-bold">{movie.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviePage;
