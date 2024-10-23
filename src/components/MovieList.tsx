import React from "react";
import MovieItem from "./MovieItem";
import { MovieDetails } from "../types/movieTypes";

interface MovieListProps {
  movies: MovieDetails[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <ul
      className="movie-list flex flex-wrap min-h-[300px] min-w-[300px] gap-10
    p-4 bg-slate-400 rounded-xl w-screen justify-center items-center"
    >
      {movies.length > 0 ? (
        movies.map((movie) => <MovieItem key={movie.imdbID} movie={movie} />)
      ) : (
        <p>No movies found.</p>
      )}
    </ul>
  );
};

export default MovieList;
