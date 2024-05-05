import { Header } from 'antd/es/layout/layout';
import TopRatedMovies from '../features/movies/TopRatedMovies';
import TrendingMovies from '../features/movies/TrendingMovies';
import SearchQuery from '../features/search/SearchQuery';

function Movies() {
  return (
    <>
      <Header className=' text-white h-[8rem] bg-[#1f1a1f]'>
        <SearchQuery />
      </Header>
      <div className='mt-20'>
        <TrendingMovies />
        <TopRatedMovies />
      </div>
    </>
  );
}

export default Movies;
