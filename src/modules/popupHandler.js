/* eslint-disable import/no-cycle */
import { movies } from './api.js';
import removePopup from './removePopup.js';
import { section } from './render.js';

export default (e) => {
  const containerId = e.target.parentNode.id;
  if (e.target.id === containerId) {
    const commentModal = document.createElement('section');
    commentModal.className = 'comment-modal';
    const backdrop = document.createElement('div');
    backdrop.className = 'backdrop';

    commentModal.appendChild(backdrop);
    const popup = document.createElement('div');
    popup.className = 'comments-popup';
    popup.innerHTML = `<div class="popup-content flex">
      <button class="popup-close">x</button>
      <img class="popup-image" src=${movies[containerId].show.image.medium} alt="">
      <div class="popup-text flex">
        <h3 class='movie-title'>${movies[containerId].show.name}</h3>
        <p class="popup-description">${movies[containerId].show.summary}</p>

        <article class="comment-section">
          <header>
            <h4>Comments <span class="comment-number">(5)</span></h4>
            <div class="comments-display"></div>
          </header>
        </article>
        <form action="#">
          <fieldset class="flex"><legend>Add Comment</legend>
            <input type="text" placeholder="Your name">
            <textarea name="comment" id="comments" cols="20" rows="5" placeholder="Your comment"></textarea>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    </div>`;
    commentModal.appendChild(popup);
    section.appendChild(commentModal);

    const close = document.querySelector('.popup-close');
    close.addEventListener('click', removePopup);
  }
};