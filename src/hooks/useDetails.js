import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

export function useDetails(func) {
  const { id } = useParams();
  const { data: details, isLoading } = useQuery({
    queryFn: () => func(id),
    queryKey: ['details', id],
  });

  return { details, isLoading };
}
