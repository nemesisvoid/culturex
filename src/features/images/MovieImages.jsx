import { useState } from 'react';

import Spinner from '../../components/Spinner';
import { useImages } from '../../hooks/useImages';
import { getMovieImages } from '../../services/apiMovies';
import Header from '../../components/Header';

function MovieImages() {
  const [imageLoad, setImageLoad] = useState(true);
  const imageUrl = `https://image.tmdb.org/t/p/original/`;

  function handleImageLoad() {
    setImageLoad(false);
  }

  const { images, isLoading } = useImages(getMovieImages);
  if (isLoading) return <Spinner />;
  return (
    <div>
      <Header text='Photos' />
      <div className='grid grid-cols-2 gap-6 w-[52rem] lg:grid-cols-1 lg:w-[90%] sm:max-w-[95%]'>
        {imageLoad && <Spinner />}
        {images.backdrops
          .map(image => (
            <img
              src={imageUrl + image.file_path}
              className='transition-all duration-500 object-cover hover:scale-[1.1] max-w-[100%]'
              key={image.id}
              onLoad={handleImageLoad}
            />
          ))
          .slice(6, 10)}
      </div>
    </div>
  );
}

export default MovieImages;
