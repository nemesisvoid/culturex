import { useQuery } from '@tanstack/react-query';
import { getSearch } from '../services/apiSearchQuery';
import { useEffect, useState } from 'react';

export const useSearchQuery = () => {
  const [search, setSearch] = useState([]);

  useEffect(() => {
    setSearch(getSearch(search));
  }, [search]);

  const {
    data: searchData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['query'],
    queryFn: getSearch,
  });

  return { search, searchData, isLoading, error, setSearch };
};
