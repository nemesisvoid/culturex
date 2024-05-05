const url = 'https://api.themoviedb.org/3/search/';
const KEY = '9de8007c05066446ad7e6411bb7a1a48';
const api = `&api_key=${KEY}`;

export const getSearch = async query => {
  const res = await fetch(`${url}multi?query=${query}${api}`);

  if (!res.ok) throw new Error('error getting search');
  const data = await res.json();
  return data.results;
};
