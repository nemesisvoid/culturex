import { useEffect, useState } from 'react';
import SearchQueryList from './SearchQueryList';
const url = 'https://api.themoviedb.org/3/search/';
const KEY = '9de8007c05066446ad7e6411bb7a1a48';
const api = `&api_key=${KEY}`;

function SearchQuery() {
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function searchQuery() {
      try {
        setIsLoading(true);
        const res = await fetch(`${url}multi?query=${query}${api}`);

        if (!res.ok) throw new Error('error fetching movies');
        const data = await res.json();
        setSearch(data.results);

        setIsLoading(false);

        return () => {
          setSearch([]);
          setIsLoading(false);
        };
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    searchQuery();
  }, [query]);

  return (
    <div className='relative w-[50%] lg:w-[100%] mx-auto'>
      <div className='flex justify-center items-center pt-6 sm:ml-[2rem]'>
        <input
          className='px-10 py-5 text-[1.6rem] text-black w-[90%] h-[100%] border-none border-grey-200 outline-none rounded-full lg:w-[90%] sm:w-[100%]'
          type='text'
          value={query}
          placeholder='search movies or shows'
          onChange={e => setQuery(e.target.value)}
        />
      </div>
      {query && (
        <ul className='bg-[#1F1A1F] z-10 absolute translate-x-[50%] right-[50%] w-[90%] overflow-y-scroll h-[64rem] rounded-2xl flex flex-col gap-10 lg:w-[100%] scrollbar'>
          {search.map(query => (
            <SearchQueryList
              key={query.id}
              query={query}
              isLoading={isLoading}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchQuery;
