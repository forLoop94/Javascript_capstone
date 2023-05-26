const commentCount = require('../_mocks_/comment_count.js');

describe('Comment_count', () => {
  test('commentcountWhenCommentArrayIsEmpty', () => {
    expect(commentCount([])).toBe(0);
  });
  test('commentcountWhenCommentArrayIsnotEmpty', () => {
    expect(commentCount(['comment1', 'comment2', 'comment3'])).toBe(3);
  });
  test('commentcountWhenCommentArrayIsnotEmpty', () => {
    expect(commentCount([
      { comment: 'So scary', creation_date: '2023-05-24', username: 'Clinton' },
      { comment: 'Cool movie', creation_date: '2023-05-24', username: 'Charles' },
    ])).toBe(2);
  });
});