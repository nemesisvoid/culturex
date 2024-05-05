import { formatVote } from '../../helpers/helper';

function WatchedCard({ watched, onDeleteWatched }) {
  const imgSrc = `https://image.tmdb.org/t/p/original/`;
  const { id, title, rating, vote_average, poster_path, runtime, name, seasons } = watched;

  return (
    <li
      className='grid relative grid-cols-[8rem_1fr] lg:gap-4 
    items-center grid-rows-[auto_auto] pb-6 px-10 border-b mb-8 gap-x-8 border-stone-200'>
      <img
        className='row-span-full w-[100%] lg:col-span-full'
        src={`${imgSrc}${poster_path}`}
        alt={`${title} poster`}
      />
      <h2 className='font-medium text-[1.8rem] overflow-hidden text-ellipsis lg:col-span-full'>{title || name}</h2>
      <div className='flex gap-12 items-center'>
        <p className='text-[1.6rem] flex items-center'>
          <span>⭐</span>
          <span>{formatVote(vote_average)}</span>
        </p>

        <p className='text-[1.6rem] flex'>
          <span>🌟</span>
          <span>{formatVote(rating)}</span>
        </p>

        <p className='text-[1.6rem] flex gap-2'>
          <span>{runtime || seasons.length} </span>
          <span>{runtime ? 'mins' : 'seasons'}</span>
        </p>

        <button
          onClick={() => onDeleteWatched(id)}
          className='absolute right-[2rem] bg-red-500 rounded-full border-none h-[2rem] text-black w-[2rem] text-[1.4rem]'>
          X
        </button>
      </div>
    </li>
  );
}

export default WatchedCard;
