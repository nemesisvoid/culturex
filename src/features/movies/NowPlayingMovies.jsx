import { Link } from 'react-router-dom';
import { useMovies } from '../../hooks/useMovies';
import Carousel from '../../components/Carousel';
import Card from '../../components/Card';
import { getNowPlayingMovies } from '../../services/apiMovies';
import Spinner from '../../components/Spinner';
import { SwiperSlide } from 'swiper/react';

function NowPlayingMovies() {
  const { movies, isLoading, error, handleNextPage } = useMovies(getNowPlayingMovies, 'now-playing');
  console.log(movies);

  if (isLoading) return <Spinner />;
  if (error) return <div>error</div>;
  return (
    <>
      <h2 className='mb-[2rem] text-[3.4rem]'>Now Playing Movies</h2>
      <Carousel loadNextPage={handleNextPage}>
        {movies.map(movie => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/details/${movie.id}`}>
              <Card movie={movie} />
            </Link>
          </SwiperSlide>
        ))}
      </Carousel>
    </>
  );
}

export default NowPlayingMovies;
