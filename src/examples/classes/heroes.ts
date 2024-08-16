import { heroesData } from '../../data/heroes-data';
import { logStyled } from '../../utils/log-styled';
import { Hero } from './models';

export const TITLE: string = 'Interface Examples';

export const displayHeroes = (): void => {
  // Convert each object into an instance of Hero
  const heroes = heroesData.map(
    hero =>
      new Hero(
        hero.name,
        hero.homeland,
        hero.hometown,
        hero.weapons,
        hero.armor,
        hero.description,
        hero.death,
        hero.titles,
        hero.father,
        hero.mother
      )
  );

  // Displaying each hero's information
  heroes.forEach(hero => {
    logStyled(`${hero.name}`);
    console.log(hero.info?.()); // Optional chaining (?.) operator to access the info() method if it exists
  });
};
