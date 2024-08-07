/**
 * Capitalizes the first letter of a string.
 * This function takes a string and returns a new string with the first letter converted to uppercase.
 * The rest of the string remains unchanged. If the input string is empty, it will be returned as is.
 * @param str - The string to capitalize. It must be a non-empty string to have its first letter capitalized.
 * @returns A new string with the first letter capitalized. If the input string is empty, it returns an empty string.
 *
 * @example
 * ```ts
 * const result = capitalize('hello');
 * console.log(result);
 * Output: 'Hello'
 * ```
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
