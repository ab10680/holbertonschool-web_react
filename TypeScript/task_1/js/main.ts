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
