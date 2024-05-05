import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import { useTrailer } from '../../hooks/useTrailer';
import { getShowTrailers } from '../../services/apiShows';

function ShowTrailer() {
  const { isLoading, clips } = useTrailer(getShowTrailers);

  if (isLoading) return <Spinner />;

  if (clips?.length === 1) return null;
  return (
    <div className='flex flex-col'>
      <Header text='Clips' />
      {clips
        ?.map(clip => (
          <iframe
            title='trailer'
            width='380'
            height='180'
            className='w-[80%] lg:w-[90%]'
            src={`https://www.youtube.com/embed/${clip.key}`}
            frameBorder='0'
            key={clip.id}
            allowFullScreen
          />
        ))
        .slice(1, 3)}
    </div>
  );
}

export default ShowTrailer;
