export const formatCurrency = value => new Intl.NumberFormat('en', { style: 'currency', currency: 'USD' }).format(value);

export const formatVote = value => Math.round(value * 10) / 10;

export const removeYear = el => {
  if (el === undefined) return;
  const newEl = el.split('').slice(0, -6).join('');
  return newEl;
};
