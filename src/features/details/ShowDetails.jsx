import ShowInfo from '../info/ShowInfo';
import ShowOverview from '../overview/ShowOverview';
import ShowPoster from '../poster/ShowPoster';

function ShowDetails() {
  return (
    <div className='grid grid-cols-auto-fill gap-16 mt-24 xl:grid-cols-grid-auto-100 px-6 lg:grid-cols-1'>
      <ShowOverview />
      <ShowPoster />
      <ShowInfo />
    </div>
  );
}

export default ShowDetails;
