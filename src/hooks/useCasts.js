import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
export function useCasts(func) {
  const { id } = useParams();
  const {
    data: casts,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => func(id),
    queryKey: ['casts'],
  });

  return { casts, isLoading, error };
}
