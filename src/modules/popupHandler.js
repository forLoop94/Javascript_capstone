/* eslint-disable import/no-cycle */
import { movies } from './api.js';
import removePopup from './removePopup.js';
import { section } from './render.js';
import commentsCounter from './commentsCounter.js';

const postComment = async (id, username, userComment) => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VGTpDpe0cMD7twV9xCen/comments?item_id=${id}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      item_id: id,
      username,
      comment: userComment,
    }),
  });
  return res;
};

const getComment = async (id) => {
  try {
    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/VGTpDpe0cMD7twV9xCen/comments?item_id=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return 'no comment';
  }
};

const display = async (id) => {
  const displayComments = document.querySelector('.comments-display');

  const commentList = await getComment(id);
  displayComments.innerHTML = '';
  if (Array.isArray(commentList)) {
    commentList.forEach((element) => {
      displayComments.innerHTML += `<p>${element.creation_date} ${element.username}: ${element.comment}</p>`;
    });
    commentsCounter(commentList);
  } else {
    displayComments.innerHTML = 'no comment available';
    commentsCounter([]);
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
              <h4>Comments (<span class="comment-number">0</span>)</h4>
              <div class="comments-display"></div>
          </article>
          <form action="#">
            <fieldset class="flex"><legend>Add Comment</legend>
              <input type="text" placeholder="Your name">
              <textarea name="comment" id="comments" cols="20" rows="5" placeholder="Your comment"></textarea>
              <button class='add-comment' type="submit">Submit</button>
            </fieldset>
          </form>
        </div>
      </div>`;
      commentModal.appendChild(popup);
      section.appendChild(commentModal);

      const close = document.querySelector('.popup-close');
      close.addEventListener('click', removePopup);

      const addCommentBtn = document.querySelector('.add-comment');

      const addComment = async (e) => {
        e.preventDefault();
        const userName = e.target.parentNode.children[1];
        const userComment = e.target.parentNode.children[2];
        if (userName.value.trim() !== '' && userComment.value.trim() !== '') {
          await postComment(currentMovie.show.id, userName.value, userComment.value);
          await display(currentMovie.show.id);
          userName.value = '';
          userComment.value = '';
        }
      };
      addCommentBtn.addEventListener('click', addComment);
      display(currentMovie.show.id);
    }
  }
};