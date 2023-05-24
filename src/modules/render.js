import { getMovies, movies } from './api.js';

const section = document.querySelector('section');
const genreArray = ['dance', 'girls'];

export const render = async () => {
  await Promise.all(genreArray.map((genre) => getMovies(genre)));
  movies.forEach((obj, key) => {
    const value = 0;
    const container = document.createElement('div');
    container.className = 'container';
    container.setAttribute('id', key);
    container.innerHTML = `<img class='image' src=${obj.show.image.medium} alt="${obj.show.name}"><h3>${obj.show.name}</h3><div class='reactions'><div><i id=${key} class='fa fa-heart'></i><span class='likes'>${value}</span></div><div><i class='fa fa-comments'></i><span class='likes'></span></div></div><div id=${key} class='comments'>Comments</div>`;
    section.appendChild(container);
  });
};

export default render;