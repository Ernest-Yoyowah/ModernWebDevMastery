import React from "react";
import { useContext } from "react";
import { MovieContext } from "./movieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <>
      <h4>Ernest</h4>
      <p>List of Movies: {movies.length}</p>
    </>
  );
};

export default Nav;
