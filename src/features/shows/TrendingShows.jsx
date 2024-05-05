import { Link } from 'react-router-dom';
import Carousel from '../../components/Carousel';
import Card from '../../components/Card';
import Spinner from '../../components/Spinner';
import { getTrendingShows } from '../../services/apiShows';
import { useShows } from '../../hooks/useShows';
import { SwiperSlide } from 'swiper/react';
import Header from '../../components/Header';

function TrendingShows() {
  const { shows, isLoading } = useShows(getTrendingShows);

  if (isLoading) return <Spinner />;

  return (
    <>
      <Header
        text='Trending Shows'
        type='h1'
        className='mt-20'
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

export default TrendingShows;
