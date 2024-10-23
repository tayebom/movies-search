import React from "react";
import { MovieDetails } from "../types/movieTypes";

interface MovieItemProps {
  movie: MovieDetails;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  return (
    <li
      key={movie.imdbID}
      className="movie-item cursor-pointer w-[240px] h-[500px] 
    bg-slate-500 rounded-xl "
    >
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="movie-poster rounded-t-xl aspect-[0.4/0.5]"
      />
      <div className="movie-info text-center p-2">
        <p>
          <strong>{movie.Title}</strong> ({movie.Year})
        </p>
        <p>
          <strong>Ratings:</strong>
        </p>
        <ul className="movie-ratings">
          {movie.Ratings.length > 0 ? (
            movie.Ratings.map((rating, index) => (
              <li key={index}>
                {rating.Source}: {rating.Value}
              </li>
            ))
          ) : (
            <li>No ratings available</li>
          )}
        </ul>
      </div>
    </li>
  );
};

export default MovieItem;
