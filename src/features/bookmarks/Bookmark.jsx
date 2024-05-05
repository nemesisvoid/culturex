import Header from '../../components/Header';
import { useBookmarks } from '../../hooks/useBookmarks';
import BookmarkList from './BookmarkList';

function Bookmark() {
  const { bookmarks } = useBookmarks();

  const filteredMovies = bookmarks.filter(book => book.tag === 'movie');

  const filteredShows = bookmarks.filter(book => book.tag === 'show');

  return (
    <div>
      {filteredMovies.length === 0 ? null : (
        <div className='mb-14'>
          <Header
            text='Bookmarked Movies'
            type='h1'
          />
          <ul className='grid grid-cols-4 gap-6 md:grid-cols-2 sm:grid-cols-1 gap-10'>
            {filteredMovies.map(bookmark => (
              <BookmarkList
                key={bookmark.id}
                bookmarks={bookmark}
              />
            ))}
          </ul>
        </div>
      )}
      {filteredShows.length === 0 ? null : (
        <div>
          <Header
            text='Bookmarked Shows'
            type='h1'
          />{' '}
          <ul className='grid gap-6 grid-cols-4 md:grid-cols-2 sm:grid-cols-1'>
            {filteredShows.map(bookmark => (
              <BookmarkList
                key={bookmark.id}
                bookmarks={bookmark}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Bookmark;
