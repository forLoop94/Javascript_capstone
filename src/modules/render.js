/* eslint-disable import/no-cycle */
import { getMovies, movies } from './api.js';
import popupHandler from './popupHandler.js';
import { likes, showLike } from './likes.js';

export const section = document.querySelector('section');
const genreArray = ['dance', 'girls'];

export const render = async () => {
  await Promise.all(genreArray.map((genre) => getMovies(genre)));
  movies.forEach((obj) => {
    const value = 0;
    const container = document.createElement('div');
    container.className = 'container';
    container.setAttribute('id', obj.show.id);
    container.innerHTML = `<img class='image' src=${obj.show.image.medium} alt="${obj.show.name}"><h3>${obj.show.name}</h3><div class='reactions'><div><i id=${obj.show.id} class='fa fa-heart'></i><span class='likes' id=${obj.show.id}>${value}</span></div><div><i class='fa fa-comments'></i><span class='show-comment'></span></div></div><button id=${obj.show.id} class='comments'>Comments</button>`;
    showLike();
    section.appendChild(container);

    const hearts = document.querySelectorAll('.fa-heart');
    hearts.forEach((heart) => {
      heart.addEventListener('click', likes);
    });
    const comments = document.querySelectorAll('.comments');
    comments.forEach((comment) => comment.addEventListener('click', popupHandler));
  });
};
