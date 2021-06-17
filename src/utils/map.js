/**
 * Функция map которая работает аналогично Array.prototype.map, только через reduce
 * @param {(element: T) => V} callback
 * @param {T[]} collection
 * @returns {T[]}
 */
const map = (callback, collection) => collection.reduce((acc, current) => [...acc, callback(current)], []);
