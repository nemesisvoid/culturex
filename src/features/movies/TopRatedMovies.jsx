import Card from '../../components/Card';
import Carousel from '../../components/Carousel';
import { useMovies } from '../../hooks/useMovies';
import { getTopRatedMovies } from '../../services/apiMovies';
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import Header from '../../components/Header';

function TopRatedMovies() {
  const { movies, isLoading, error, handleNextPage } = useMovies(getTopRatedMovies, 'top-rated');

  if (isLoading) return <Spinner />;
  if (error) return <div>error</div>;
  return (
    <>
      <Header
        text='Top Rated Movies'
        type='h1'
      />
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

export default TopRatedMovies;
