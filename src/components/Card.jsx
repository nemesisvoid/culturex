import { useState } from 'react';
import { formatVote, removeYear } from '../helpers/helper';
import { FaStar } from 'react-icons/fa6';
import MiniSpinner from './MiniSpinner';

function Card({ movie }) {
  const [imageLoad, setImageLoad] = useState(true);

  function handleImageLoad() {
    setImageLoad(false);
  }

  const imageUrl = `https://image.tmdb.org/t/p/original/${movie.poster_path || movie.backdrop_path}`;

  return (
    <li className='pb-4 shadow rounded-2xl mb-8'>
      {imageLoad && <MiniSpinner />}
      <img
        src={imageUrl}
        alt={movie.title || movie.name}
        onLoad={handleImageLoad}
        className='rounded-xl'
      />

      <div className='px-6 text-white mt-8'>
        <p className='mb-4 text-[1.6rem]'>{movie.title || movie.name}</p>
        <div className='flex justify-between'>
          <p>{removeYear(movie?.first_air_date || movie?.release_date)}</p>
          <p className='flex items-center gap-1'>
            <FaStar /> {movie?.vote_average ? formatVote(movie.vote_average) : 'N/A'}
          </p>
        </div>
      </div>
    </li>
  );
}

export default Card;
