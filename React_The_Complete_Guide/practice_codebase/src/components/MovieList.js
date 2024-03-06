import { useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([
    {
      name: "Ernest",
      price: "$30.32",
      id: 4231,
    },
    {
      name: "Nii",
      price: "$32",
      id: 4232,
    },
    {
      name: "Yoyowah",
      price: "$42",
      id: 4233,
    },
  ]);
  return <div>MovieList</div>;
};

export default MovieList;
