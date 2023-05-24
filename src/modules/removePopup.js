export default (e) => {
  const parentElement = e.target.parentNode.parentNode.parentNode;
  parentElement.remove();
 }