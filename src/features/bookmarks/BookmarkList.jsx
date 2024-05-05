import { Link } from 'react-router-dom';
import { formatVote } from '../../helpers/helper';
import { useState } from 'react';
import Spinner from '../../components/Spinner';

function BookmarkList({ bookmarks }) {
  const isMovie = bookmarks.tag === 'movie';
  const imageUrl = `https://image.tmdb.org/t/p/original/`;

  const [imageLoad, setImageLoad] = useState(true);
  function handleImageLoad() {
    setImageLoad(false);
  }

  return (
    <li className='rounded-2xl'>
      <Link to={`${isMovie ? `/movie/details/${bookmarks.id}` : `/show/details/${bookmarks.id}`}`}>
        {imageLoad && <Spinner />}
        <img
          src={imageUrl + bookmarks.backdrop_path}
          className='rounded-xl'
          alt={`${bookmarks.title || bookmarks.name} poster`}
          onLoad={handleImageLoad}
        />

        <div className='shadow flex md:flex-col md:gap-6 justify-between py-10 px-6'>
          <p className='text-overflow overflow-hidden text-ellipsis max-w-[55ch] whitespace-nowrap'>{bookmarks.title || bookmarks.name}</p>
          <p>{formatVote(bookmarks.vote_average)}</p>
        </div>
      </Link>
    </li>
  );
}

export default BookmarkList;
