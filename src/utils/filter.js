/**
 * Функция filter которая работает аналогично Array.prototype.filter, только через reduce
 * @param {(element: T) => boolean} predicate
 * @param {collection: T[]} collection
 * @returns { T[]}
 */
function filter(predicate, collection) {
  return collection.reduce(function (acc, current) {
    if (predicate(current)) {
      return [...acc, current];
    }
    return acc;
  }, []);
}
