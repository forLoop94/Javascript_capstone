const ItemCount = require('../_mocks_/Item_count.js');

describe('Item_count', () => {
  test('itemcountWhenArrayIsEmpty', () => {
    expect(ItemCount([])).toBe(0);
  });
  test('itemcountWhenArrayIsnotEmpty', () => {
    expect(ItemCount([1, 2, 3])).toBe(3);
  });
});
