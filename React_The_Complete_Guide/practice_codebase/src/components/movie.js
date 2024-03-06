const Movie = ({ movieName, price }) => {
  return (
    <div>
      <h3>{movieName}</h3>
      <p>{price}</p>
    </div>
  );
};

export default Movie;
