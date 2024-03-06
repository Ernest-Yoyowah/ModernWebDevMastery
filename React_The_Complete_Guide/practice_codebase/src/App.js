import React from "react";
import "./index.css";
import MovieList from "./components/MovieList";
import Nav from "./components/Nav";
import { MovieProvider } from "./components/movieContext";

const App = () => {
  return (
    <MovieProvider>
      <>
        <Nav />
        <MovieList />
      </>
    </MovieProvider>
  );
};

export default App;
