export const movies = [];
export const getMovies = async (genre) => {
  try {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${genre}`);
    const data = await res.json();
    return movies.push(...data);
  } catch (error) {
    return error;
  }
};
