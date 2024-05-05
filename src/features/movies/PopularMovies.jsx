import { Link } from 'react-router-dom';
import { useMovies } from '../../hooks/useMovies';
import Carousel from '../../components/Carousel';
import Card from '../../components/Card';
import { getPopularMovies } from '../../services/apiMovies';
import Spinner from '../../components/Spinner';
import { SwiperSlide } from 'swiper/react';
import Header from '../../components/Header';

function PopularMovies() {
  const { movies, isLoading, error } = useMovies(getPopularMovies, 'popular-movies');

  if (isLoading) return <Spinner />;
  if (error) return <div>error</div>;
  return (
    <div className='mt-20'>
      <Header
        text='Popular Movies'
        type='h1'
      />
      <Carousel>
        {movies.map(movie => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/details/${movie.id}`}>
              <Card movie={movie} />
            </Link>
          </SwiperSlide>
        ))}
      </Carousel>
    </div>
  );
}

export default PopularMovies;
