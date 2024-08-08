export const TITLE: string = 'Union Types Example';

export const unionTypesExample = (): void => {
  // Types
  type Child = {
    firstName: string;
    lastName: string;
    age: number;
    activities?: string[];
  };

  // Union Type for contact information
  type ContactInfo = {
    email: string;
    phone?: string; // Optional phone number
  };

  // Person type can have contact as either a string or a ContactInfo object
  type Person = {
    firstName: string;
    lastName: string;
    age: number;
    contact: string | ContactInfo; // Union Type
    profession?: string;
    children?: Child[]; // Optional property
    wife?: Person;
    husband?: Person;
  };

  type Daycare = {
    name: string;
    location: string;
    children: Child[];
    getChildrenList: () => Child[];
  };

  // Objects
  const children: Child[] = [
    {
      firstName: 'Gael',
      lastName: 'Pompa Ciambrino',
      age: 2,
      activities: [
        'English',
        'Sensory Stimulation',
        'Psychomotor Stimulation',
        'Cognitive Stimulation',
        'Music and Reading',
        'Pedagogical Activities',
      ],
    },
    {
      firstName: 'Emma',
      lastName: 'Pompa Ciambrino',
      age: 1,
      activities: [
        'Sensory Stimulation',
        'Psychomotor Stimulation',
        'Cognitive Stimulation',
        'Pedagogical Activities',
      ],
    },
  ];

  // Creating a person with simple contact as a string
  const emma: Person = {
    firstName: 'Emma',
    lastName: 'Ciambrino Baz',
    age: 42,
    contact: 'emma.ciambrino@example.com', // Simple contact
    profession: 'International Market Analyst',
    children: children,
  };

  // Creating a person with detailed contact information
  const daniel: Person = {
    firstName: 'Daniel',
    lastName: 'Pompa Pareja',
    age: 49,
    contact: {
      email: 'daniel.pompa@example.com',
      phone: '656 123 456', // Detailed contact
    },
    profession: 'MERN Stack Developer',
    children: children,
    wife: emma,
  };

  // Set relationships
  emma.husband = daniel;
  daniel.wife = emma;

  const catInBoots: Daycare = {
    name: 'The Cat in Boots',
    location: 'Madrid',
    children: children,
    getChildrenList: function () {
      return this.children;
    },
  };

  // Functions
  // Function to display person information including their contact
  const showPersonDetails = (person: Person) => {
    const { firstName, lastName, age, contact, profession, husband, wife } = person;
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Profession: ${profession}`);

    // Check if contact is a string or an object
    if (typeof contact === 'string') {
      console.log(`Contact: ${contact}`);
    } else {
      console.log(`Email: ${contact.email}`);
      console.log(`Phone: ${contact.phone || 'Not provided'}`);
    }

    // Display spouse information if available
    if (wife) {
      console.log(`Wife: ${wife.firstName} ${wife.lastName}`);
    }
    if (husband) {
      console.log(`Husband: ${husband.firstName} ${husband.lastName}`);
    }
  };

  // Function to display child information
  const showChildren = (children: Child[]) => {
    console.log('Children:');
    children.forEach(child => {
      console.log(`- ${child.firstName} ${child.lastName}, Age: ${child.age}`);
    });
  };

  // Function to display child activities
  const showChildActivities = (child: Child) => {
    if (child.activities && child.activities.length > 0) {
      console.log(`Activities:`);
      child.activities.forEach(activity => {
        console.log(`- ${activity}`);
      });
    } else {
      console.log('Activities: None');
    }
  };

  // Output
  console.log("%cEmma's Information", 'color: #1e3a8a; font-weight: bold');
  showPersonDetails(emma);
  // Check if children is defined before passing to function
  if (emma.children) {
    showChildren(emma.children);
  }

  console.log("%cDaniel's Information", 'color: #1e3a8a; font-weight: bold');
  showPersonDetails(daniel);
  // Check if children is defined before passing to function
  if (daniel.children) {
    showChildren(daniel.children);
  }

  console.log('%cDaycare Information', 'color: #1e3a8a; font-weight: bold');
  console.log(`Daycare Name: ${catInBoots.name}`);
  console.log(`Location: ${catInBoots.location}`);

  console.log('%cDaycare Activities', 'color: #1e3a8a; font-weight: bold');
  catInBoots.getChildrenList().forEach(child => {
    console.log(`Name: ${child.firstName}, Age: ${child.age}`);
    showChildActivities(child);
  });
};
