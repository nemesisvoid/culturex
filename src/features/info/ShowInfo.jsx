import { useBookmarks } from '../../hooks/useBookmarks';
import { useDetails } from '../../hooks/useDetails';
import { getShowDetails } from '../../services/apiShows';

import Spinner from '../../components/Spinner';
import Button from '../../components/Button';
import ShowImages from '../images/ShowImages';
import ShowTrailer from '../trailers/ShowTrailer';

import { HiBookmark, HiPlay } from 'react-icons/hi';

function ShowInfo() {
  const { details, isLoading } = useDetails(getShowDetails);
  const { handleBookmark, isBookmarked } = useBookmarks();

  if (isLoading) return <Spinner />;

  const { id, name, backdrop_path, vote_average } = details;
  const bookmarkedShow = { id, name, backdrop_path, vote_average, tag: 'show' };

  return (
    <div className='flex flex-col gap-20'>
      <div className='flex gap-14 items-start flex-wrap'>
        <Button
          type='small'
          className='flex border border-gray-100 gap-4 items-start hover:text-[#fff] transition-all duration-300'>
          Watch Trailer
          <HiPlay size={20} />
        </Button>
        <Button
          onClick={() => handleBookmark(bookmarkedShow)}
          className='text-[#fff] border hover:text-[#a98b8a] transition-all duration-300 border-gray-100 flex gap-4 items-center'
          type='small'>
          {isBookmarked(id) ? 'Added to Bookmark' : 'Add to Bookmark'}{' '}
          <HiBookmark
            size={18}
            color={isBookmarked(id) ? '#a98b8a' : '#fff'}
          />
        </Button>
      </div>
      <ShowImages />
      <ShowTrailer />
    </div>
  );
}

export default ShowInfo;
