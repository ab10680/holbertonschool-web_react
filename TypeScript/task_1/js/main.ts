// Task 1 & 2 â- Teacher and Directors interfaces

// Teacher interface
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional
  location: string;

  // Allow any additional property
  [propName: string]: any;
}

// Directors interface extending Teacher
export interface Directors extends Teacher {
  numberOfReports: number;
}

// Example for Task 1
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// Example for Task 2
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Task 3 â- printTeacher function + interface
export interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const initial = firstName ? firstName[0].toUpperCase() : '';
  return `${initial}. ${lastName}`;
};

// Example
console.log(printTeacher('John', 'Doe')); // J. Doe

// Task 4 â- StudentClass with constructor & class interfaces

// Interface describing the *instance* (the class shape)
export interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Interface describing the *constructor* signature
export interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Class implementation typed via the constructor interface
export const StudentClass: StudentConstructor = class StudentClass
  implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
};

// Quick sanity check (optional)
const s = new StudentClass('Alice', 'Smith');
console.log(s.displayName());     // Alice
console.log(s.workOnHomework());  // Currently working
