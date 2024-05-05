import useLocalStorage from './useLocalStorage';

export function useWatched() {
  const [watched, setIsWatched] = useLocalStorage([], 'watched');

  const isWatched = selectedId => watched.some(watch => watch.id === selectedId);

  const watchedUserRating = selectedId => watched.find(watch => watch.id === selectedId)?.rating;

  function handleDeleteWatched(id) {
    setIsWatched(watched => watched.filter(movie => movie.id !== id));
  }

  return { isWatched, watched, setIsWatched, watchedUserRating, handleDeleteWatched };
}
