const url = 'https://api.themoviedb.org/3/';
const KEY = '9de8007c05066446ad7e6411bb7a1a48';
const api = `?api_key=${KEY}`;

// export const getTopRatedMovies = async () => {
//   const res = await fetch(`${url}movie/top_rated${api}`);

//   if (!res.ok) throw new Error('error getting top rated movies');
//   const data = await res.json();
//   return data;
// };

export const getPopularMovies = async (page = 1) => {
  const res = await fetch(`${url}/movie/popular${api}&page=${page}`);

  if (!res.ok) throw new Error('error getting top rated movies');
  const data = await res.json();
  return data.results;
};

export const getTrendingMovies = async () => {
  const res = await fetch(`${url}trending/movie/day${api}`);

  if (!res.ok) throw new Error('error getting top rated movies');
  const data = await res.json();
  console.log(data);
  return data.results;
};

export const getTopRatedMovies = async (page = 1) => {
  const res = await fetch(`${url}/movie/top_rated${api}&page=${page}`);
  if (!res.ok) throw new Error('error getting top rated movies');
  const data = await res.json();
  return data.results;
};

export const getNowPlayingMovies = async (page = 1) => {
  const res = await fetch(`${url}/movie/now_playing${api}&page=${page}`);
  if (!res.ok) throw new Error('error getting top rated movies');
  const data = await res.json();
  return data.results;
};

export const getMovieDetails = async id => {
  const res = await fetch(`${url}movie/${id}${api}`);

  if (!res.ok) throw new Error('error getting movie details');
  const data = await res.json();
  return data;
};

export const getMovieCasts = async id => {
  const res = await fetch(`${url}movie/${id}/credits${api}`);

  if (!res.ok) throw new Error('error getting movie casts');
  const data = await res.json();
  return data;
};

export const getMovieImages = async id => {
  const res = await fetch(`${url}movie/${id}/images${api}`);

  if (!res.ok) throw new Error('error getting movie images');
  const data = await res.json();
  return data;
};

export const getMovieTrailers = async id => {
  const res = await fetch(`${url}movie/${id}/videos${api}`);

  if (!res.ok) throw new Error('error getting movie images');
  const data = await res.json();
  return data;
};
