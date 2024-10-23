import { useState, useEffect, useCallback } from "react";
import { MovieDetails } from "../types/movieTypes";
import { fetchMovies, fetchMovieDetails } from "../services/omdbApi";

// Custom hook for fetching movie data
export const useMovies = (searchTerm: string) => {
  const [movies, setMovies] = useState<MovieDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMoviesData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const movieList = await fetchMovies(searchTerm);
      const detailedMovies = await Promise.all(
        movieList.map(async (movie) => {
          const details = await fetchMovieDetails(movie.imdbID);
          return details;
        })
      );

      // Filter out null values if fetching details fails
      setMovies(detailedMovies.filter((movie) => movie !== null) as MovieDetails[]);
    } catch (error) {
      setError("Failed to load movies. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);

  useEffect(() => {
    if (searchTerm) {
      fetchMoviesData();
    }
  }, [searchTerm, fetchMoviesData]);

  return { movies, loading, error };
};
