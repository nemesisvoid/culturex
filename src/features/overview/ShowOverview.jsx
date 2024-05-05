import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { formatVote } from '../../helpers/helper';
import { useDetails } from '../../hooks/useDetails';
import { getShowDetails } from '../../services/apiShows';
import ShowCast from '../casts/ShowCast';
import Rating from '../Ratings/Rating';
import { useWatched } from '../../hooks/useWatched';
import Header from '../../components/Header';

function ShowOverview() {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const { setIsWatched, isWatched, watchedUserRating } = useWatched();

  const { details, isLoading } = useDetails(getShowDetails);
  if (isLoading) return <Spinner />;

  const {
    name = 'N/A',
    overview = 'N/A',
    first_air_date = 'N/A',
    number_of_episodes,
    last_air_date = 'N/A',
    next_episode_to_air,
    poster_path,
    genres,
    seasons,
    vote_average = 'N/A',
    status = 'N/A',
  } = details;

  const watchedShow = { id, name, number_of_episodes, seasons, vote_average, rating, poster_path, tag: 'show' };

  function handleAddWatched(movie) {
    setIsWatched(watched => [...watched, movie]);
  }

  return (
    <div>
      <div className='flex flex-col gap-4 mb-20'>
        <h1 className='font-medium tracking-wider text-[3rem] mb-6'>{name}</h1>
        <p className='max-w-[65ch] leading-9'>Synopsis: {overview}</p>
        <p>Rating: {formatVote(vote_average)}</p>
        <p>Release date: {first_air_date}</p>
        <p>No of episodes: {number_of_episodes} eps</p>
        <p>No of seasons: {seasons.length} seasons</p>
        <p>Genres: {genres?.map(genre => genre?.name).join(', ')}</p>
        <p className='flex gap-6'>
          <span>Last air date: {last_air_date}</span>
          {next_episode_to_air && <span> Next air date: {next_episode_to_air?.air_date}</span>}
        </p>
        <p>Status: {status}</p>
      </div>
      <ShowCast />

      {!isWatched(id) ? (
        <div className='py-6 w-[70%] sm:w-[100%] flex flex-col items-center justify-center border-none rounded-lg lg:mb-0 bg-[#2F252D] mb-[6rem]'>
          <Header text='Rate this show' />
          <Rating
            rating={rating}
            setRating={setRating}
          />
          {rating > 0 && (
            <button
              className='mt-8 text-[1.8rem] bg-[#282128] px-10 py-2 rounded-md hover:bg-[#261f26]'
              onClick={() => handleAddWatched(watchedShow)}>
              + add to watched list
            </button>
          )}
        </div>
      ) : (
        <div className='py-6 w-[50%] sm:w-[70%] border-none rounded-lg bg-[#211c21] mb-[6rem] lg:mb-0 sm:mb-[2rem]xs:w-[100%]'>
          <p className='text-[1.6rem] text-center'>You rated this show {watchedUserRating(id)}⭐</p>
        </div>
      )}
    </div>
  );
}

export default ShowOverview;
