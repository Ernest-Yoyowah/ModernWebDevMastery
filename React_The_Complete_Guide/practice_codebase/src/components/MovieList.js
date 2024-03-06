import { useState } from "react";

const MovieList = () => {
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
  return <div>MovieList</div>;
};

export default MovieList;
