import { getLikes, postLikes } from './api.js';

let result;
export const showLike = async () => {
  const likesDisplay = document.querySelectorAll('.likes');
  const likesArray = await getLikes();
  likesDisplay.forEach((element) => {
    const getId = element.id;
    likesArray.forEach((id) => {
      if (id.item_id === getId) {
        element.innerText = id.likes;
        result = element.innerText;
      }
    });
  });
  return result;
};

export const likes = async (e) => {
  const parent = e.target.parentNode.parentNode.parentNode;
  const parentId = parent.id;
  console.log(parentId)
  await postLikes(parentId);
  showLike();
};
