import useLocalStorage from './useLocalStorage';

export const useBookmarks = () => {
  const [bookmarks, setBookmarks] = useLocalStorage([], 'Bookmarks');

  const handleAddBookmark = item => {
    setBookmarks(bookmarks => [...bookmarks, item]);
  };

  const handleRemoveBookmark = itemId => {
    setBookmarks(bookmarks => bookmarks.filter(item => item.id !== itemId));
  };

  const isBookmarked = itemId => bookmarks.some(item => item.id === itemId);

  function handleBookmark(item) {
    if (isBookmarked(item.id)) {
      handleRemoveBookmark(item.id);
    } else {
      handleAddBookmark(item);
    }
  }

  return { bookmarks, handleBookmark, isBookmarked };
};
