import axios from "axios";
import { Movie, MovieDetails } from "../types/movieTypes";

const OMDB_API_URL = "https://www.omdbapi.com/";
const API_KEY = "56d8ec28";

// Fetch movies by search term from the OMDb API
export const fetchMovies = async (query: string): Promise<Movie[]> => {
  try {
    const response = await axios.get(OMDB_API_URL, {
      params: {
        apikey: API_KEY,
        s: query, // Search term for movies
      },
    });
    if (response.data.Response === "True") {
      return response.data.Search;
    }
    return [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

// Fetch detailed movie data (language, ratings, etc.)
export const fetchMovieDetails = async (
  movieId: string
): Promise<MovieDetails | null> => {
  try {
    const response = await axios.get(OMDB_API_URL, {
      params: {
        apikey: API_KEY,
        i: movieId, // IMDb ID to get detailed movie information
      },
    });

    if (response.data.Response === "True") {
      return {
        ...response.data,
        Language: response.data.Language,
        Ratings: response.data.Ratings,
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
