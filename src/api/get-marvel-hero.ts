import axios from 'axios';
import { IMarvelHero } from '../interfaces';

/**
 * Retrieves detailed information about a Marvel hero from the Marvel API.
 *
 * Makes a request to the Marvel API using the provided hero name to fetch the hero's data.
 * The function constructs the API request URL with the necessary parameters including API key, hash, and timestamp.
 * It returns a promise that resolves to the hero's data.
 *
 * @param {string} name - The name of the Marvel hero to retrieve information for.
 * @returns {Promise<IMarvelHero>} A promise that resolves to the detailed data of the Marvel hero.
 *
 */
export const getMarvelHero = async (name: string): Promise<IMarvelHero> => {
  const baseUrl = 'https://gateway.marvel.com';
  const endpoint = 'v1/public/characters';
  const apikey = import.meta.env.VITE_MARVEL_API_KEY;
  const hash = import.meta.env.VITE_HASH;
  const ts = import.meta.env.VITE_TS;
  const { data } = await axios.get<IMarvelHero>(
    `${baseUrl}/${endpoint}?apikey=${apikey}&hash=${hash}&ts=${ts}&name=${name}`
  );
  return data;
};
