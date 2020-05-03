export const date = new Date();
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
export let currentDate = date.toLocaleString("ru", options);