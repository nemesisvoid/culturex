import { Header } from 'antd/es/layout/layout';
import SearchQuery from '../features/search/SearchQuery';
import PopularShows from '../features/shows/PopularShows';
import TopRatedShows from '../features/shows/TopRatedShows';

function Shows() {
  return (
    <>
      <Header className=' text-white h-[8rem] bg-[#1f1a1f]'>
        <SearchQuery />
      </Header>
      <TopRatedShows />
      <PopularShows />
    </>
  );
}

export default Shows;
