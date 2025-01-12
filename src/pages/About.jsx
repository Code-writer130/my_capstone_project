import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "6e6730d401ee421ff457202b260f1380";

const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${API_BASE_URL}/movie/${id}?api_key=${API_KEY}`
        );
        setMovie(response.data);
      } catch (err) {
        console.error("Error fetching movie details:", err);
        setError("Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-20">
        <h2 className="text-2xl font-bold text-red-500">{error}</h2>
        <button
          onClick={() => navigate(-1)}
          className="text-blue-500 mt-4 hover:underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-24 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden lg:flex justify-center items-center lg:justify-start lg:space-x-4 lg:pl-6">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : "https://via.placeholder.com/500x750?text=No+Image+Available"
          }
          alt={movie.title || "No Title Available"}
          className="w-full h-100 object-cover lg:w-32 lg:h-48 rounded-lg"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">
            {movie.title || "Untitled"}
          </h1>
          <p className="text-gray-700 text-lg">
            {movie.overview || "No overview available for this movie."}
          </p>
          <p className="text-gray-500 text-sm mt-4">
            Release Date: {movie.release_date || "Not Available"}
          </p>
          <p className="text-gray-500 text-sm">
            Rating:{" "}
            {movie.vote_average ? `${movie.vote_average}/10` : "Not Rated"}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="mt-4 text-blue-500 hover:text-blue-700"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
