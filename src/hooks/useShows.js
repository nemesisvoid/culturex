import { useQuery } from '@tanstack/react-query';

export const useShows = (func, queryKey) => {
  const {
    data: shows,
    isLoading,
    error,
  } = useQuery({
    queryKey: [queryKey, 'shows'],
    queryFn: func,
  });

  return { shows, isLoading, error };
};
