import { Child, Person } from './models';
import { logStyled } from '../../utils/log-styled';

export const TITLE: string = 'Interface Examples';

export const personClassExamples = (): void => {
  logStyled('Person class example');
  const persons: Person[] = [
    new Person('Daniel', 'Pompa Pareja', 49, '648 56 18 34', 'daniel.pompa@example.com'),
    new Person('Emma', 'Ciambrino', 42, '669 56 45 82', 'emma.ciambrino@example.com'),
  ];

  for (const person of persons) {
    console.log(person.info());
  }

  logStyled('Inheritance example');
  const gael = new Child(
    'Gael',
    'Pompa Ciambrino',
    2,
    ['Emma', 'Noa', 'Luca', 'Leo', 'Héctor'],
    'Little Stars'
  );
  console.log(gael.info());

  const emma = new Child(
    'Emma',
    'Pompa Ciambrino',
    1,
    ['Gael', 'Noa', 'Luca', 'Leo', 'Héctor'],
    'Little Stars'
  );
  console.log(emma.info());
};
