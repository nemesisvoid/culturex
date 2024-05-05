import { useBookmarks } from '../../hooks/useBookmarks';
import { useDetails } from '../../hooks/useDetails';
import { getMovieDetails } from '../../services/apiMovies';

import Spinner from '../../components/Spinner';
import Button from '../../components/Button';
import MovieImages from '../images/MovieImages';
import MovieTrailer from '../trailers/MovieTrailer';

import { HiBookmark, HiPlay } from 'react-icons/hi';

function MovieInfo() {
  const { details, isLoading } = useDetails(getMovieDetails);
  const { handleBookmark, isBookmarked } = useBookmarks();

  if (isLoading) return <Spinner />;

  const { id, title, backdrop_path, vote_average } = details;

  const movieBookmark = { id, title, backdrop_path, vote_average, tag: 'movie' };

  return (
    <div className='flex flex-col gap-20'>
      <div className='flex  flex-wrap gap-14 items-start '>
        <Button
          type='small'
          className='flex border border-gray-100 gap-4 items-start hover:text-[#fff] transition-all duration-300'>
          Watch Trailer
          <HiPlay size={20} />
        </Button>
        <Button
          onClick={() => handleBookmark(movieBookmark)}
          className='text-[#fff] border hover:text-[#a98b8a] transition-all duration-300 border-gray-100 flex gap-4 items-center'
          type='small'>
          {isBookmarked(id) ? 'Added to Bookmarks' : 'Add to Bookmark'}{' '}
          <HiBookmark
            size={18}
            color={isBookmarked(id) ? '#a98b8a' : '#fff'}
          />
        </Button>
      </div>
      <MovieImages />
      <MovieTrailer />
    </div>
  );
}

export default MovieInfo;
