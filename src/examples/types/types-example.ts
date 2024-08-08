export const TITLE = 'Types Examples';

export const typesExample = (): void => {
  // Simple type example
  console.log('%cSimple type example', 'color: #1e3a8a; font-weight: bold;');
  type Person = {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
    profession: string;
    technologies: string[];
  };

  // Factory function to create a Person object
  // This function takes several parameters and returns a new Person object
  const createPerson = (
    firstName: string,
    lastName: string,
    age: number,
    email: string,
    profession: string,
    technologies: string[]
  ): Person => ({
    firstName,
    lastName,
    age,
    email,
    profession,
    technologies,
  });

  // Function to display the details of a person
  const showPersonDetails = (person: Person): void => {
    const { firstName, lastName, age, email, profession, technologies } = person;

    console.log(`Name: ${firstName} ${lastName}`);
    console.log('Age:', age);
    console.log(`Email address: ${email}`);
    console.log(`Profession: ${profession}`);
    console.log('Technologies:', [...technologies]);
  };

  // Creating a Person object
  // Using the factory function to create an instance of Person
  const person = createPerson(
    'Daniel',
    'Pompa Pareja',
    49,
    'daniel.pompa@example.com',
    'MERN Stack Developer',
    ['TypeScript', 'MongoDB', 'Express.js', 'React', 'Node.js']
  );

  showPersonDetails(person);

  // Complex type example
  console.log('%cComplex type example', 'color: #1e3a8a; font-weight: bold;');

  // Definition of Student, Instructor and Course Types
  type Student = {
    id: number;
    name: string;
    email: string;
    enrolledCourses: Course[];
  };

  type Instructor = {
    id: number;
    name: string;
    email: string;
    coursesTaught: Course[];
  };

  type Course = {
    id: number;
    title: string;
    description: string;
    instructor: Instructor;
    students: Student[];
  };

  // Function for enrolling a student in a course
  const enrollStudentInCourse = (student: Student, course: Course): void => {
    student.enrolledCourses.push(course);
    course.students.push(student);
    console.log(`${student.name} has been enrolled in ${course.title}`);
  };

  // Function to display the details of a course
  const showCourseDetails = (course: Course): void => {
    console.log(`Course ID: ${course.id}`);
    console.log(`Title: ${course.title}`);
    console.log(`Description: ${course.description}`);
    console.log(`Instructor: ${course.instructor.name}`);
    console.log(`Enrolled Students: ${course.students.map(s => s.name).join(', ')}`);
  };

  // Creating an instructor
  const instructor: Instructor = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    coursesTaught: [],
  };

  // Creating a course
  const course: Course = {
    id: 101,
    title: 'Complete TypeScript Guide',
    description:
      'Learn the fundamentals and advanced concepts of TypeScript, a strongly-typed superset of JavaScript.',
    instructor: instructor,
    students: [],
  };

  // Assigning the course to the instructor
  instructor.coursesTaught.push(course);

  // Creating a student
  const student: Student = {
    id: 1001,
    name: 'Daniel Pompa',
    email: 'daniel.pompa@example.com',
    enrolledCourses: [],
  };

  // Enrolling the student in the course
  enrollStudentInCourse(student, course);

  // Mostrando los detalles del curso
  showCourseDetails(course);
};
