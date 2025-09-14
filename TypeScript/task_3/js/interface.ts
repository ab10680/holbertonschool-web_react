// Task 8 �- Interfaces & types for rows

// RowID is a number identifier
export type RowID = number;

// RowElement describes a row object
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // optional
}
