import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
export function useTrailer(func) {
  const { id } = useParams();
  const [clips, setClips] = useState([]);

  const {
    data: trailer,
    isLoading,
    error,
  } = useQuery({
    queryFn: () => func(id),
    queryKey: ['trailers'],
  });

  useEffect(() => {
    setClips(trailer?.results?.filter(clip => clip?.type !== 'Trailer' || clip.type == 'Teaser'));
  }, [trailer]);

  return { trailer, isLoading, error, clips };
}
