import MovieOverview from '../overview/MovieOverview';
import MoviePoster from '../poster/MoviePoster';
import MovieInfo from '../info/MovieInfo';

function MovieDetails() {
  return (
    <div className='pl-8 grid grid-cols-auto-fill gap-16 mt-24 xl:grid-cols-grid-auto-100 lg:grid-cols-1 lg:content-center'>
      <MovieOverview />
      <MoviePoster />
      <MovieInfo />
    </div>
  );
}

export default MovieDetails;
