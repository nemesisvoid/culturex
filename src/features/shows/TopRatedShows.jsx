import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import Card from '../../components/Card';
import Spinner from '../../components/Spinner';
import { getTopRatedShows } from '../../services/apiShows';
import { useShows } from '../../hooks/useShows';
import { SwiperSlide } from 'swiper/react';
import Header from '../../components/Header';
function TopRatedShows() {
  const { shows, isLoading } = useShows(getTopRatedShows, 'top-rated');

  if (isLoading) return <Spinner />;

  return (
    <>
      <Header
        text='Top Rated Shows'
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

export default TopRatedShows;
