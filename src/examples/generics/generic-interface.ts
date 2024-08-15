import { logStyled } from '../../utils/log-styled';

export const TITLE: string = 'Generic Interfaces Examples';

export const genericInterfaceExamples = (): void => {
  // Define the generic interface StorageBox
  interface StorageBox<T> {
    addItem(...items: T[]): void;
    getItem(index: number): T | undefined;
    getAllItems(): ReadonlyArray<T>;
    removeItem(index: number): void;
  }

  // Implement the generic interface with a concrete class GenericStorageBox
  class GenericStorageBox<T> implements StorageBox<T> {
    private readonly items: T[] = [];

    addItem(...items: T[]): void {
      this.items.push(...items);
    }

    getItem(index: number): T | undefined {
      if (index >= 0 && index < this.items.length) {
        return this.items[index];
      }
      console.error(`Index [${index}] is out of bounds`);
      return undefined;
    }

    getAllItems(): ReadonlyArray<T> {
      return [...this.items];
    }

    removeItem(index: number): void {
      if (index >= 0 && index < this.items.length) {
        this.items.splice(index, 1);
      } else {
        console.error(`Index ${index} is out of bounds`);
      }
    }
  }

  // Define an interface for a User
  interface User {
    id: number;
    username: string;
    email?: string;
  }

  // Define an interface for a Task
  interface Task {
    id: number;
    title: string;
    completed: boolean;
  }

  // Example usage of StorageBox for different data types
  logStyled('Generic storage box examples');

  // StorageBox for strings
  logStyled('String example');
  const stringBox = new GenericStorageBox<string>();
  stringBox.addItem('A', 'B', 'C', 'D');
  console.log('Strings:', stringBox.getAllItems());
  stringBox.addItem('E');
  console.log('Strings after adding:', stringBox.getAllItems());
  stringBox.removeItem(4);
  console.log('Strings after removing:', stringBox.getAllItems());

  // StorageBox for numbers
  logStyled('Number example');
  const numberBox = new GenericStorageBox<number>();
  numberBox.addItem(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
  console.log('Numbers:', numberBox.getAllItems());
  numberBox.addItem(10);
  console.log('Numbers after adding:', numberBox.getAllItems());
  numberBox.removeItem(10);
  console.log('Numbers after removing:', numberBox.getAllItems());

  // StorageBox for users
  logStyled('User example');
  const userBox = new GenericStorageBox<User>();
  userBox.addItem(
    { id: 1, username: 'daniel', email: 'daniel@example.com' },
    { id: 2, username: 'emma', email: 'emma@example.com' },
    { id: 3, username: 'gael' }
  );
  console.log('Users:', userBox.getAllItems());
  userBox.addItem({ id: 4, username: 'oscar', email: 'oscar@example.com' });
  console.log('Users after adding:', userBox.getAllItems());
  const foundUser = userBox.getItem(2);
  console.log(
    'Find user:',
    foundUser
      ? foundUser.email
        ? foundUser
        : { ...foundUser, email: 'not available' }
      : 'User not found'
  );
  userBox.removeItem(3);
  console.log('Users after removing:', userBox.getAllItems());

  // StorageBox for tasks
  logStyled('Task example');
  const taskBox = new GenericStorageBox<Task>();
  taskBox.addItem(
    { id: 1, title: 'Learn TypeScript', completed: false },
    { id: 2, title: 'Define generic interface', completed: true },
    { id: 3, title: 'Create generic class and implement interface', completed: true },
    { id: 4, title: 'Write usage examples', completed: true },
    { id: 5, title: 'Write unit tests', completed: false }
  );
  console.log('Tasks:', taskBox.getAllItems());
  taskBox.addItem({ id: 6, title: 'Refactor code', completed: false });
  console.log('Tasks after adding:', taskBox.getAllItems());
  const foundTask = taskBox.getItem(3);
  console.log('Find task:', foundTask ? foundTask : 'Task not found');
  taskBox.removeItem(5);
  console.log('Tasks after removing:', taskBox.getAllItems());
};
