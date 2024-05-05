import WatchedMovieSummary from '../features/Watched/WatchedMovieSummary';
import WatchedShowSummary from '../features/Watched/WatchedShowSummary';

function WatchedList() {
  return (
    <div className=' flex flex-col gap-20 items-center mx-auto mt-[9rem] max-w-[80%] px-20 lg:px-0 sm:w-[100%]'>
      <WatchedMovieSummary />
      <WatchedShowSummary />
    </div>
  );
}

export default WatchedList;
