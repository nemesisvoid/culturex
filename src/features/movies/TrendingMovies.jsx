import { Link } from 'react-router-dom';
import { useMovies } from '../../hooks/useMovies';
import Carousel from '../../components/Carousel';
import Card from '../../components/Card';
import { getTrendingMovies } from '../../services/apiMovies';
import Spinner from '../../components/Spinner';
import { SwiperSlide } from 'swiper/react';
import Header from '../../components/Header';

function TrendingMovies() {
  const { movies, isLoading, error } = useMovies(getTrendingMovies, 'trending-movies');

  if (isLoading) return <Spinner />;
  if (error) return <div>error</div>;
  return (
    <>
      <Header
        text='Trending Movies'
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
    </>
  );
}

export default TrendingMovies;
