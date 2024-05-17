import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "The Social Network",
      price: "$30.32",
      id: 4231,
    },
    {
      name: "The Man",
      price: "$32",
      id: 4232,
    },
    {
      name: "Law of Life",
      price: "$42",
      id: 4233,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

// export MovieProvider;
