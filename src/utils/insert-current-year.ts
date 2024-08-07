/**
 * Inserts the current year into an HTML element with the specified ID.
 * This function selects an HTML element by its ID and sets its text content to the current year.
 * If the element is not found, no changes are made.
 * @param elementId - The ID of the HTML element where the current year will be inserted.
 * @returns void - This function does not return any value.
 *
 * @example
 * ```ts
 * insertCurrentYear('year');
 * ```
 */
export const insertCurrentYear = (elementId: string): void => {
  const element: HTMLElement | null = document.querySelector(`#${elementId}`);
  if (element) {
    element.textContent = new Date().getFullYear().toString();
  }
};
