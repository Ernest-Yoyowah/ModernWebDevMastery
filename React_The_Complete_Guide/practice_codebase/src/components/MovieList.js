import { useState, useContext } from "react";
import Movie from "./movie";
import { MovieContext } from "./movieContext";

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <>
      {movies.map((movie) => (
        <Movie key={movie.id} movieName={movie.name} price={movie.price} />
      ))}
    </>
  );
};

export default MovieList;
