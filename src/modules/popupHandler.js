/* eslint-disable import/no-cycle */
import { movies } from './api.js';
import removePopup from './removePopup.js';
import { section } from './render.js';

const postComment = async (id,username,userComment) =>{
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VGTpDpe0cMD7twV9xCen/comments?item_id=${id}`,{
    method:'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
      username: username,
      comment: userComment,
    })
  })
}

const getComment = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VGTpDpe0cMD7twV9xCen/comments?item_id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return 'no comment';
  }
};

export default (e) => {
  for (let i = 0; i < movies.length; i += 1) {
    const currentMovie = movies[i];
    if (currentMovie.show.id === parseFloat(e.target.id)) {
      const commentModal = document.createElement('section');
      commentModal.className = 'comment-modal';

      const popup = document.createElement('div');
      popup.className = 'comments-popup';
      popup.innerHTML = `<div class="popup-content flex">
        <button class="popup-close">x</button>
        <img class="popup-image" src=${currentMovie.show.image.medium} alt="">
        <div class="popup-text flex">
          <h4 class='movie-title'>${currentMovie.show.name}</h4>
          <p class="popup-description">${currentMovie.show.summary}</p>
  
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
  }
};