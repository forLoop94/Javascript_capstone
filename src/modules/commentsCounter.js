export default (arr) => {
  const commentNum = document.querySelector('.comment-number');
  commentNum.textContent = arr.length;
};