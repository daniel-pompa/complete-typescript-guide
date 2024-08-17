import { getMarvelHero } from './get-marvel-hero';
import { logStyled } from '../utils/log-styled';

export const TITLE: string = 'Marvel API Usage Examples';

/**
 * Fetches and demonstrates examples of retrieving Marvel hero data from the Marvel API.
 * Includes examples for:
 * 1. Basic fetching of a single Marvel hero.
 * 2. Fetching and displaying the name and description of a Marvel hero.
 * 3. Fetching data for multiple Marvel heroes in sequence.
 * 4. Fetching data for multiple Marvel heroes in parallel.
 *
 * This function handles errors that occur when fetching hero data, including:
 * - Hero not found errors.
 * - General API request errors.
 *
 * @returns {Promise<void>} A promise that resolves when all examples have been processed.
 */
export const fetchMarvelHeroExamples = async (): Promise<void> => {
  logStyled('Example 1: Basic Fetching of a Marvel Hero');
  try {
    const heroName = 'Iron Man';
    const hero = await getMarvelHero(heroName);
    if (!hero.data.results.length) {
      throw new Error(`Hero "${heroName}" not found.`);
    }
    console.log('Hero data:', hero);
  } catch (error) {
    console.error('Error fetching hero.', error);
  }

  logStyled('Example 2: Fetching Marvel Hero Name and Description');
  try {
    const heroName = 'Iron Man';
    const { data: { results } } = await getMarvelHero(heroName);
    if (!results.length) {
      throw new Error(`Hero "${heroName}" not found.`);
    }
    const { name, description } = results[0];
    console.log(`Hero name: ${name}`);
    console.log(`Hero description: ${description}`);
  } catch (error) {
    console.error('Error fetching hero.', error);
  }

  logStyled('Example 3: Fetching Multiple Marvel Heroes in Sequence');
  try {
    const heroNames = ['Hulk', 'Wolverine', 'Deadpool', 'Black Widow'];
    for (const name of heroNames) {
      const { data: { results } } = await getMarvelHero(name);
      if (!results.length) {
        throw new Error(`Hero "${name}" not found.`);
      }
      console.log(`${name} data:`, results[0]);
    }
  } catch (error) {
    console.error('Error fetching heroes:', error);
  }

  logStyled('Example 4: Fetching Multiple Heroes in Parallel');
  try {
    const heroNames = [
      'Nick Fury',
      'Thor',
      'Hawkeye',
      'Black Panther',
      'Punisher',
      'Doctor Strange',
    ];
    const heroPromises = heroNames.map(async name => {
      const { data: { results } } = await getMarvelHero(name);
      if (!results.length) {
        throw new Error(`Hero "${name}" not found.`);
      }
      return results[0];
    });
    const heroes = await Promise.all(heroPromises);
    heroes.forEach((hero, index) => {
      console.log(`${heroNames[index]} data:`, hero);
    });
  } catch (error) {
    console.error('Error fetching heroes:', error);
  }
};
