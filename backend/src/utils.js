/**Function to generate a alphanumeric string.
 *
 * @param {number} length Required length of the string generated.
 * @returns {string} The alphanumeric string.
 */
export function generateAlphaNumericString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
