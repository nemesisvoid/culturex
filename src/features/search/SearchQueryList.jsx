import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import { formatVote, removeYear } from '../../helpers/helper';
import MiniSpinner from '../../components/MiniSpinner';

function SearchQueryList({ query, isLoading }) {
  const imageUrl = `https://image.tmdb.org/t/p/original/`;
  const { id, name, title, release_date, poster_path, media_type, vote_average, first_air_date } = query;

  if (isLoading) return <MiniSpinner />;

  return (
    <li className=' text-white pt-4 hover:bg-[#5f4d5b]'>
      <Link
        to={`${media_type === 'movie' ? `/movie/details/${id}` : `/show/details/${id}`}`}
        className='flex items-center gap-14 px-10'>
        <img
          src={imageUrl + poster_path}
          alt={`${name || title} poster`}
          className='h-[10rem] w-[10rem] object-cover rounded-full xs:hidden '
        />

        <div className='text-white overflow-hidden'>
          <div className='overflow-hidden text-nowrap max-w-[40ch] text-ellipsis whitespace-nowrap'>{name || title}</div>

          <p className='flex items-center flex-wrap'>
            <span className='mr-4'>{removeYear(release_date || first_air_date)}</span>
            <FaStar />
            <span>{!vote_average ? 'N/A' : formatVote(vote_average)}</span>
          </p>
        </div>
      </Link>
    </li>
  );
}

export default SearchQueryList;
