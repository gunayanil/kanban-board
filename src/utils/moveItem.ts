/* <T> Generic type: any kind of items */
export const moveItem = <T>(array: T[], from: number, to: number) => {
  // always positive or 0
  const startIndex = to < 0 ? array.length + to : to;
  // remove the item with the from index
  const removedItem = array.splice(from, 1)[0];
  // then insert removedItem at startIndex position
  array.splice(startIndex, 0, removedItem);
  return array;
};
