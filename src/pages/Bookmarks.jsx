import Bookmark from '../features/bookmarks/Bookmark';
import { useBookmarks } from '../hooks/useBookmarks';

function Bookmarks() {
  const { bookmarks } = useBookmarks();
  console.log(bookmarks);

  if (bookmarks.length === 0)
    return (
      <p className=' text-white text-[2.6rem] text-center  translate-y-[50%] absolute translate-x-[50%] top-[40%] right-[50%]'>
        you have not bookmarked any movies/shows
      </p>
    );
  return (
    <div className='mt-[8rem] px-10'>
      <Bookmark />
    </div>
  );
}

export default Bookmarks;
