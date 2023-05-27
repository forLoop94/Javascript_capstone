export const movies = [];
const likesApiUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VGTpDpe0cMD7twV9xCen/likes';
export const getMovies = async (genre) => {
  try {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=${genre}`);
    const data = await res.json();
    return movies.push(...data);
  } catch (error) {
    return error;
  }
};

export const getLikes = async () => {
  try {
    const response = await fetch(likesApiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
export const postLikes = async (itemId) => {
  try {
    const response = await fetch(likesApiUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ item_id: itemId }),
    });
    return response;
  } catch (error) {
    return error;
  }
};
