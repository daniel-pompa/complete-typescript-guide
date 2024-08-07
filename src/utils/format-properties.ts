/**
 * Formats the properties of an object into a string.
 * This function takes an object and converts each property into a line of text in the format `- key: value`.
 * If the value is `undefined` or `null`, it will be displayed as "Not available".
 * @param object - The object whose properties will be formatted.
 * @returns A string where each line represents a property of the object in the format `- key: value`.
 *
 * @example
 * ```ts
 * const obj = { name: 'Alice', age: 30, country: null };
 * const result = formatProperties(obj);
 * console.log(result);
 * Output:
 * - name: Alice
 * - age: 30
 * - country: Not available
 * ```
 */
export const formatProperties = (object: Record<string, any>): string => {
  return Object.entries(object)
    .map(([key, value]) => `- ${key}: ${value ?? 'Not available'}`)
    .join('\n');
};
