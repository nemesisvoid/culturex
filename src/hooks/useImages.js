import { useQuery } from '@tanstack/react-query';
// import { getMovieImages } from '../services/apiMovies';
import { useParams } from 'react-router-dom';

export function useImages(func) {
  const { id } = useParams();
  const {
    data: images,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => func(id),
    queryKey: ['images', id],
  });

  return { images, isLoading, error };
}
