import { useState } from 'react';
import Spinner from '../../components/Spinner';
import { useDetails } from '../../hooks/useDetails';
import { getMovieDetails } from '../../services/apiMovies';
import MiniSpinner from '../../components/MiniSpinner';

function MoviePoster() {
  const [imageLoad, setImageLoad] = useState(true);

  function handleImageLoad() {
    setImageLoad(false);
  }
  const imgSrc = `https://image.tmdb.org/t/p/original/`;
  const { details, isLoading } = useDetails(getMovieDetails);

  if (isLoading) return <Spinner />;

  return (
    <div className='lg:row-start-1 lg:mb-12 lg:mt-12'>
      {imageLoad && <MiniSpinner />}
      <img
        className='rounded-3xl shadow-lg'
        src={`${imgSrc}${details?.poster_path}`}
        alt={`${details?.title} image`}
        onLoad={handleImageLoad}
      />
    </div>
  );
}

export default MoviePoster;
