import { useState } from 'react';
import Spinner from '../../components/Spinner';
import { useCasts } from '../../hooks/useCasts';
import { getMovieCasts } from '../../services/apiMovies';
import MiniSpinner from '../../components/MiniSpinner';

function MovieCast() {
  const profile = `https://image.tmdb.org/t/p/w500/`;
  const [imageLoad, setImageLoad] = useState(true);
  const { casts, isLoading } = useCasts(getMovieCasts);
  if (isLoading) return <Spinner />;

  function handleImageLoad() {
    setImageLoad(false);
  }

  return (
    <div className='flex gap-4 flex-wrap lg:justify-center mb-20'>
      {imageLoad && <MiniSpinner />}
      {casts?.cast
        .map(cast => (
          <div
            key={cast.id}
            className='lg:mb-4'>
            <img
              onLoad={handleImageLoad}
              width={'120px'}
              src={`${profile}${cast.profile_path}`}
              alt={`${cast.name} image`}
            />
            <p className='overflow-hidden text-nowrap max-w-[15ch] text-ellipsis whitespace-nowrap'>{cast.name}</p>

            <p className='overflow-hidden text-nowrap max-w-[15ch] text-ellipsis whitespace-nowrap'>({!cast.character ? 'N/A' : cast.character})</p>
          </div>
        ))
        .splice(0, 8)}
    </div>
  );
}

export default MovieCast;
