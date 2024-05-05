const url = 'https://api.themoviedb.org/3/';
const KEY = '9de8007c05066446ad7e6411bb7a1a48';
const api = `?api_key=${KEY}`;

export const getTrendingShows = async () => {
  const res = await fetch(`${url}trending/tv/day${api}`);

  if (!res.ok) throw new Error('error getting trending shows');
  const data = await res.json();
  return data.results;
};

export const getTopRatedShows = async () => {
  const res = await fetch(`${url}tv/top_rated${api}`);

  if (!res.ok) throw new Error('error getting trending shows');
  const data = await res.json();
  return data.results;
};

export const getPopularShows = async () => {
  const res = await fetch(`${url}tv/popular${api}`);

  if (!res.ok) throw new Error('error getting trending shows');
  const data = await res.json();
  return data.results;
};

export const getShowDetails = async id => {
  const res = await fetch(`${url}tv/${id}${api}`);

  if (!res.ok) throw new Error('error getting movie details');
  const data = await res.json();
  return data;
};

export const getShowCasts = async id => {
  const res = await fetch(`${url}tv/${id}/credits${api}`);

  if (!res.ok) throw new Error('error getting movie casts');
  const data = await res.json();
  return data;
};

export const getShowImages = async id => {
  const res = await fetch(`${url}tv/${id}/images${api}`);

  if (!res.ok) throw new Error('error getting movie images');
  const data = await res.json();
  return data;
};

export const getShowTrailers = async id => {
  const res = await fetch(`${url}tv/${id}/videos${api}`);

  if (!res.ok) throw new Error('error getting movie images');
  const data = await res.json();
  return data;
};
