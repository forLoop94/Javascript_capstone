export default (arr) => {
  const commentNum = document.querySelector('.comment-number');
  return commentNum.textContent = arr.length;
}