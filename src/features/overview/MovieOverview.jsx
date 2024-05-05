import { getMovieDetails } from '../../services/apiMovies';
import { useDetails } from '../../hooks/useDetails';
import Spinner from '../../components/Spinner';
import { formatCurrency, formatVote } from '../../helpers/helper';
import MovieCast from '../casts/MovieCast';
import Rating from '../Ratings/Rating';
import { useState } from 'react';
import { useWatched } from '../../hooks/useWatched';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';

function MovieOverview() {
  const { id } = useParams();
  const [rating, setRating] = useState(0);

  const { setIsWatched, isWatched, watchedUserRating } = useWatched();

  const { details, isLoading } = useDetails(getMovieDetails);
  if (isLoading) return <Spinner />;

  const {
    title = 'N/A',
    overview = 'N/A',
    runtime = 'N/A',
    release_date = 'N/A',
    genres,
    vote_average = 'N/A',
    poster_path,
    budget = 'N/A',
    revenue = 'N/A',
    status = 'N/A',
  } = details;

  const watchedMovie = { id, title, runtime, release_date, vote_average, rating, poster_path, tag: 'movie' };

  function handleAddWatched(movie) {
    setIsWatched(watched => [...watched, movie]);
  }

  return (
    <div className='px-5'>
      <div className='flex flex-col gap-4 mb-20'>
        <h1 className='font-medium tracking-wider text-[3rem] mb-6'>{title}</h1>
        <p className='max-w-[65ch] xs:max-w-[25ch] leading-9'>Synopsis: {overview}</p>
        <p>Rating: {formatVote(vote_average)}</p>
        <p>Release date: {release_date}</p>
        <p>Runtime: {runtime}mins</p>
        <p>Genres: {genres?.map(genre => genre?.name).join(', ')}</p>
        <p className='flex flex-wrap gap-6'>
          <span>Budget: {formatCurrency(budget)}</span>
          <span> Box office: {formatCurrency(revenue)}</span>
        </p>
        <p>Status: {status}</p>
      </div>
      <MovieCast />

      {!isWatched(id) ? (
        <div className=' py-6 w-[70%] sm:w-[100%] flex flex-col items-center justify-center border-none rounded-lg lg:mb-0 bg-[#2F252D] mb-[6rem]'>
          <Header text='Rate this movie' />
          <Rating
            rating={rating}
            setRating={setRating}
          />
          {rating > 0 && (
            <button
              className='mt-8 text-[1.8rem] bg-[#282128] px-10 py-2 rounded-md hover:bg-[#261f26]'
              onClick={() => handleAddWatched(watchedMovie)}>
              + add to watched list
            </button>
          )}
        </div>
      ) : (
        <div className='py-6 w-[50%] sm:w-[70%] border-none rounded-lg bg-[#211c21] mb-[6rem] lg:mb-0 sm:mb-[2rem] xs:w-[100%]'>
          <p className='text-[1.6rem] text-center'>You rated this movie {watchedUserRating(id)}⭐</p>
        </div>
      )}
    </div>
  );
}

export default MovieOverview;
