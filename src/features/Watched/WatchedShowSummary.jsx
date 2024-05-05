import { useWatched } from '../../hooks/useWatched';
import WatchedCard from './WatchedCard';

function WatchedShowSummary() {
  const { watched, handleDeleteWatched } = useWatched();

  const watchedShows = watched.filter(watch => watch.tag === 'show');

  const avgUserRating = watchedShows.reduce((acc, cur) => acc + cur.rating / watchedShows.length, 0);

  const avgRating = watchedShows.reduce((acc, cur) => acc + cur.vote_average / watchedShows.length, 0);

  const avgWatchedSeasons = watchedShows.reduce((acc, cur) => acc + cur.seasons.length, 0);

  const avgWatchedEpisodes = watchedShows.reduce((acc, cur) => acc + cur.number_of_episodes, 0);
  console.log('watched shows', watchedShows);

  return (
    <div className='bg-[#2F252D] rounded-xl w-[100%]'>
      <div className='py-8 px-6 bg-[#1f1a1f] rounded-xl'>
        <h2 className='mb-6 text-center text-[1.8rem]'>Shows You Watched</h2>
        <div className='flex items-center flex-wrap justify-center text-[1.48rem] gap-10 '>
          <p>#️⃣{watchedShows.length} shows </p>
          <p> ⭐ {avgRating.toFixed(1)}</p>
          <p>🌟{avgUserRating.toFixed(1)}</p>
          <p>⏳{avgWatchedSeasons} seasons</p>
          <p>⏳{avgWatchedEpisodes} episodes </p>
        </div>
      </div>
      <ul className='mt-8 overflow-auto h-[50rem] scrollbar'>
        {watchedShows.map(watch => (
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

export default WatchedShowSummary;
