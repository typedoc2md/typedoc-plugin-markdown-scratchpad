/**
 * Returns `true` if any value of `iterable` is equal to `searchElement` using
 * `Object.is`. Otherwise returns `false`.
 *
 * Like `Array.prototype.includes`, but for iterables.
 *
 * @example
 * ```js
 * console.log(
 *   pipe(
 *     [`sloth`, `more sloth`, `even more sloth`],
 *     includes(3),
 *   ),
 * )
 * //=> true
 * ```
 */
export const includes: {
  (searchElement: unknown): <Value>(iterable: Iterable<Value>) => boolean;
  <Value>(searchElement: unknown, iterable: Iterable<Value>): boolean;
};
