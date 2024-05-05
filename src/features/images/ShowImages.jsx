import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import { useImages } from '../../hooks/useImages';
import { getShowImages } from '../../services/apiShows';

function ShowImages() {
  const imageUrl = `https://image.tmdb.org/t/p/original/`;

  const { images, isLoading } = useImages(getShowImages);
  if (isLoading) return <Spinner />;
  return (
    <div>
      <Header text='Photos' />
      <div className='grid grid-cols-2 gap-6 w-[52rem] lg:grid-cols-1 lg:w-[90%] sm:max-w-[95%]'>
        {images.backdrops
          .map(image => (
            <img
              src={imageUrl + image.file_path}
              className='transition-all duration-500 object-cover hover:scale-[1.1] max-w-[100%]'
              key={image.id}
            />
          ))
          .slice(6, 10)}
      </div>
    </div>
  );
}

export default ShowImages;
