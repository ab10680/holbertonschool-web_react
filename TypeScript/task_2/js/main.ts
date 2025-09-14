// Task 5 â- Advanced types Part 1

// Interfaces
export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classes
export class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }
  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }
  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }
  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }
  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Factory function
export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Examples (match expected output by logging the class name)
console.log((createEmployee(200) as any).constructor.name);   // Teacher
console.log((createEmployee(1000) as any).constructor.name);  // Director
console.log((createEmployee('$500') as any).constructor.name); // Director

// Task 6 â- Functions specific to employees

// Type predicate to check if employee is a Director
export function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// Execute the proper work function based on employee type
export function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// Expected examples
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks

// Task 7 â- String literal types
export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  return 'Teaching History';
}

// Expected examples
console.log(teachClass('Math'));    // Teaching Math
console.log(teachClass('History')); // Teaching History
