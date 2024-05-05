import { Card } from 'antd';
import { Link } from 'react-router-dom';

function MoviesList({ movie }) {
  // console.log(movie);
  return (
    <Link to={`/movie/details/${movie.id}`}>
      <Card movie={movie} />
    </Link>
  );
}

export default MoviesList;
