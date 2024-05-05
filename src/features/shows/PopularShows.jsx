import Card from '../../components/Card';
import Carousel from '../../components/Carousel';
import { SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { useShows } from '../../hooks/useShows';
import { getPopularShows } from '../../services/apiShows';
import Header from '../../components/Header';

function PopularShows() {
  const { shows, isLoading, error } = useShows(getPopularShows, 'popular');

  if (isLoading) return <Spinner />;
  if (error) return <div>error</div>;
  return (
    <>
      <Header
        text='Popular Shows'
        type='h1'
      />
      <Carousel>
        {shows.map(movie => (
          <SwiperSlide key={movie.id}>
            <Link to={`/show/details/${movie.id}`}>
              <Card movie={movie} />
            </Link>
          </SwiperSlide>
        ))}
      </Carousel>
    </>
  );
}

export default PopularShows;
