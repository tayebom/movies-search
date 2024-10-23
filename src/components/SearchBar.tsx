import React from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const query = formData.get("search") as string;
    onSearch(query);
  };

  return (
    <form onSubmit={handleSearch} className="search-bar p-2">
      <div className="flex justify-center items-center ">
        <input
          type="text"
          name="search"
          placeholder="Search for a movie..."
          className="search-input bg-slate-700 text-gray-300 rounded-s-lg p-1 outline-0"
        />
        <button
          type="submit"
          className="search-button p-1 text-gray-300 rounded-e-lg
      bg-slate-700"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
