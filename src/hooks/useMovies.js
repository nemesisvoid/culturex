import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

export const useMovies = (func, queryKey) => {
  const queryClient = useQueryClient();
  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage(curPage => curPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  const {
    data: movies,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => func(currentPage),
    queryKey: [queryKey, currentPage],
  });

  if (currentPage > 1)
    queryClient.prefetchQuery({
      queryFn: () => func(currentPage),
      queryKey: ['movies', currentPage],
    });

  return { movies, currentPage, isLoading, error, handleNextPage };
};
