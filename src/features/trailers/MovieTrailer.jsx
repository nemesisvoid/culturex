import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import { useTrailer } from '../../hooks/useTrailer';
import { getMovieTrailers } from '../../services/apiMovies';

function MovieTrailer() {
  const { isLoading, clips } = useTrailer(getMovieTrailers);

  if (isLoading) return <Spinner />;

  return (
    <div className='flex flex-col sm:hidden'>
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

export default MovieTrailer;
