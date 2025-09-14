// Task 1 â- Teacher interface

// Note: firstName and lastName are read-only (set only at initialization)
export interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number; // optional
  location: string;

  // Allow any additional property with string key and any type
  [propName: string]: any;
}

// Example according to the requirements
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // extra property
};

// Runtime check
console.log(teacher3);
