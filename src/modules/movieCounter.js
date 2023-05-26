const showMovie = document.querySelector('.show-item');

const movieCounter = (item) => {
  showMovie.textContent = item.length;
};
export default movieCounter;