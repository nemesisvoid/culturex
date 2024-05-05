import { useWatched } from '../../hooks/useWatched';
import WatchedCard from './WatchedCard';

function WatchedMovieSummary() {
  const { watched, handleDeleteWatched } = useWatched();

  const watchedMovies = watched.filter(watch => watch.tag === 'movie');

  const avgUserRating = watchedMovies.reduce((acc, cur) => acc + cur.rating / watchedMovies.length, 0);

  const avgRating = watchedMovies.reduce((acc, cur) => acc + cur.vote_average / watchedMovies.length, 0);

  const avgRuntime = watchedMovies.reduce((acc, cur) => acc + cur.runtime / watchedMovies.length, 0);

  return (
    <div className='bg-[#2F252D] rounded-xl w-[100%]'>
      <div className='py-8 px-10 bg-[#1f1a1f] rounded-xl'>
        <h2 className='mb-6 text-center text-[1.8rem]'>Movies You Watched</h2>
        <div className='flex flex-wrap sm:gap-4 items-center justify-center text-[1.48rem] gap-10'>
          <p>#️⃣{watchedMovies.length} movies </p>
          <p> ⭐ {avgRating.toFixed(1)}</p>
          <p>🌟{avgUserRating.toFixed(1)}</p>
          <p>⏳{avgRuntime} mins</p>
        </div>
      </div>
      <ul className='mt-8 overflow-auto h-[50rem] scrollbar'>
        {watchedMovies.map(watch => (
          <WatchedCard
            key={watch.id}
            watched={watch}
            onDeleteWatched={handleDeleteWatched}
          />
        ))}
      </ul>
    </div>
  );
}

export default WatchedMovieSummary;
