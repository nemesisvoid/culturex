import { Header } from 'antd/es/layout/layout';
import PopularMovies from '../features/movies/PopularMovies';
import SearchQuery from '../features/search/SearchQuery';
import TrendingShows from '../features/shows/TrendingShows';

function Home() {
  return (
    <>
      <Header className=' text-white h-[8rem] bg-[#1f1a1f]'>
        <SearchQuery />
      </Header>
      <PopularMovies />
      <TrendingShows />
    </>
  );
}

export default Home;
