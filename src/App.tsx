import React, { useState } from "react";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import { useMovies } from "./hooks/useMovies";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { movies, loading, error } = useMovies(searchTerm);

  return (
    <div className="app-container">
      <div className="bg-slate-600 min-w-[300px]">
        <div
          className="sticky top-0.5 bg-slate-500 rounded-xl 
        mx-2"
        >
          <h1
            className="bg-gradient-to-r from-lime-200 to-sky-400 
          bg-clip-text text-transparent font-bold text-6xl text-center 
          p-1 antialiased font-serif"
          > 
            Movie Search
          </h1>
          <SearchBar onSearch={setSearchTerm} />
        </div>
        <div className="flex justify-center items-center text-white p-2 min-h-[512px]">
          {loading && <p>Loading movies...</p>}
          {error && <p className="error-message">{error}</p>}

          {!loading && !error && <MovieList movies={movies} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
